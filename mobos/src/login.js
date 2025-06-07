// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from './AuthContext';
import './login.css';

function Login() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(t('login.loginSuccess'));
        login();
        navigate('/'); // Redirect to home page
      } else {
        setError(data.error || t('login.loginFailed'));
        alert(t('login.loginFailed'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('login.fetchFailed'));
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality is not implemented yet.');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2>{t('Login')}</h2>
        <div className="inputField">
          <label htmlFor="login-username">{t('Username')}</label><br />
          <input
            type="text"
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputField"
            required
          />
        </div>
        <div className="inputField">
          <label htmlFor="login-password">{t('Password')}</label><br />
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="submitButton"
        >
          {t('Login')}
        </button>
        <div style={{ marginTop: '10px' }}>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="link"
          >
            {t('Forgot Password?')}
          </button>
          <Link to="/register" className="link" style={{ marginTop: '10px' }}>
            {t('Create Account')}
          </Link>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
      </div>
    </div>
  );
}

export default Login;
