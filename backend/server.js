const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: '1111',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static('uploads')); // Serve static files from the "uploads" directory

// PostgreSQL pool configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reg',
  password: 'Infant12???',
  port: 5432
});

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Endpoint to handle user registration
app.post('/register', upload.single('file'), async (req, res) => {
  const { username, password, mobileNumber, email, otp } = req.body;
  const filePath = req.file ? req.file.path : null;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (username, password, mobile_number, email, otp, file_path) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [username, hashedPassword, mobileNumber, email, otp, filePath]
    );
    res.status(201).json({ message: 'User registered successfully!', user: result.rows[0] });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Endpoint to handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        req.session.user = username; // Store username in session
        res.status(200).json({ success: true, user });
      } else {
        res.status(401).json({ success: false, error: 'Invalid username or password' });
      }
    } else {
      res.status(401).json({ success: false, error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ success: false, error: 'Login failed' });
  }
});

// Endpoint to get logged-in user details
app.get('/user', (req, res) => {
  const username = req.session.user;

  if (username) {
    res.status(200).json({ username }); // Return username stored in session
  } else {
    res.status(401).json({ error: 'User not authenticated' });
  }
});

// CRUD operations for users

// Get all users
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Get user by Username
app.get('/users/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user by Username:', error);
    res.status(500).json({ error: 'Error fetching user' });
  }
});

// Update user by Username
app.put('/users/:username', async (req, res) => {
  const username = req.params.username;
  const { password, mobileNumber, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'UPDATE users SET password = $1, mobile_number = $2, email = $3 WHERE username = $4 RETURNING *',
      [hashedPassword, mobileNumber, email, username]
    );
    
    if (result.rows.length > 0) {
      res.status(200).json({ message: 'User updated successfully', user: result.rows[0] });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Delete user by Username
app.delete('/users/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const result = await pool.query('DELETE FROM users WHERE username = $1 RETURNING *', [username]);

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'User deleted successfully', user: result.rows[0] });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
