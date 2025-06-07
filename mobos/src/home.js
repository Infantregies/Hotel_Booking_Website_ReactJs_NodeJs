import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './home.css';
import logo from './images/logo1.jpg';
import searchIcon from './images/search-icon.svg';
import ads2 from './images/slide1.jpg';
import ads3 from './images/slide2.jpg';
import ads4 from './images/slide4.jpg';
import iphone from './images/c1.jpg';
import samsung from './images/c2.jpeg';
import google8 from './images/c3.jpeg';
import samsung54 from './images/c4.jpg';
import google7 from './images/c5.jpeg';
import vivo from './images/c6.jpeg';
import oneplus from './images/c7.jpeg';
import oppo from './images/c8.avif';
import poco from './images/c9.avif';
import { useAuth } from './AuthContext'; 


const mobiles = [
  {
    id: 0,
    name: 'Taj Coromandel',
    image: iphone,
    details: {
      price: '$299',
      originalPrice: '$399',
      highlights: ['5-star luxury', 'Swimming pool', 'Fine dining restaurants'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Deluxe Suite', 'Presidential Suite', 'Luxury Room'],
      description: 'Taj Coromandel offers a luxurious stay in the heart of Chennai with world-class amenities, personalized service, and exquisite dining options. Ideal for business or leisure, it promises an unforgettable experience.'
    }
  },
  {
    id: 1,
    name: 'Vivanta Coimbatore',
    image: samsung,
    details: {
      price: '$199',
      originalPrice: '$299',
      highlights: ['Elegant rooms', 'Spa and wellness center', 'Conference facilities'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Superior Room', 'Premium Room', 'Executive Suite'],
      description: 'Vivanta Coimbatore blends contemporary style with comfort, featuring spacious accommodations, top-notch amenities, and a serene environment, making it perfect for both business travelers and vacationers.'
    }
  },
  {
    id: 2,
    name: 'Anantya By The Lake',
    image: google8,
    details: {
      price: '$249',
      originalPrice: '$349',
      highlights: ['Lakeside villas', 'Yoga and meditation sessions', 'Authentic local cuisine'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Lakeview Villa', 'Heritage Villa', 'Premium Suite'],
      description: 'Anantya By The Lake offers a tranquil retreat surrounded by lush greenery and serene waters. Guests can enjoy yoga, meditation, and gourmet cuisine, making it a rejuvenating escape from city life.'
    }
  },
  {
    id: 3,
    name: 'Kodai Resort Hotel',
    image: samsung54,
    details: {
      price: '$149',
      originalPrice: '$249',
      highlights: ['Hilltop cottages', 'Bonfire evenings', 'Scenic views'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Cottage Room', 'Valley View Suite', 'Family Suite'],
      description: 'Kodai Resort Hotel is nestled in the picturesque hills of Kodaikanal, offering cozy cottages, stunning views, and memorable activities like bonfires and nature walks for a perfect getaway.'
    }
  },
  {
    id: 4,
    name: 'Svatma',
    image: google7,
    details: {
      price: '$399',
      originalPrice: '$499',
      highlights: ['Heritage property', 'Cultural experiences', 'Gourmet dining'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Heritage Suite', 'Luxury Room', 'Royal Suite'],
      description: 'Svatma is a beautifully restored heritage property that offers an immersive cultural experience. From traditional cuisine to art and music, it promises an enriching stay for every guest.'
    }
  },
  {
    id: 5,
    name: 'The Story Resorts Spa',
    image: vivo,
    details: {
      price: '$299',
      originalPrice: '$399',
      highlights: ['Spa treatments', 'Private villas', 'Infinity pool'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Private Villa', 'Luxury Suite', 'Poolside Villa'],
      description: 'The Story Resorts Spa is an oasis of relaxation, offering luxurious private villas, rejuvenating spa treatments, and an infinity pool that overlooks breathtaking landscapes.'
    }
  },
  {
    id: 6,
    name: 'The Carlton',
    image: oneplus,
    details: {
      price: '$249',
      originalPrice: '$349',
      highlights: ['Lakeview rooms', 'Candlelight dinners', 'Adventure activities'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Lakeview Room', 'Garden Suite', 'Luxury Cottage'],
      description: 'The Carlton is a lakeside haven with elegantly designed rooms, gourmet dining options, and exciting adventure activities. Perfect for couples, families, and friends seeking a memorable escape.'
    }
  },
  {
    id: 7,
    name: 'La Woods Hotel',
    image: oppo,
    details: {
      price: '$99',
      originalPrice: '$199',
      highlights: ['City center location', 'Modern amenities', 'Budget-friendly'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Standard Room', 'Executive Room', 'Family Room'],
      description: 'La Woods Hotel is a modern, budget-friendly property located in the heart of the city. With comfortable accommodations and excellent service, it’s a great choice for both business and leisure travelers.'
    }
  },
  {
    id: 8,
    name: 'Trident Hotel Chennai',
    image: oppo,
    details: {
      price: '$199',
      originalPrice: '$299',
      highlights: ['Close to airport', 'Business center', 'Swimming pool'],
      paymentOptions: ['Credit/Debit card', 'Net Banking', 'Pay on Arrival'],
      roomsAvailable: ['Deluxe Room', 'Club Room', 'Presidential Suite'],
      description: 'Trident Hotel Chennai offers convenient access to the airport and the city’s key attractions. With luxurious rooms, a state-of-the-art business center, and a refreshing pool, it’s ideal for business and leisure travelers alike.'
    }
  }
];



function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // Use isAuthenticated and logout from AuthContext

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/register');
  };

  const valueSender = (index) => {
    const selectedMobile = mobiles[index];
    navigate('/product', { state: { mobile: selectedMobile } });
  };

  useEffect(() => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    let slideIndex = 0;

    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
    };

    const interval = setInterval(showSlides, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  

  return (
    <div className="body">
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="https://example.com"><img src={logo} alt="Logo" /></Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit"><img src={searchIcon} alt="Search" /></button>
          </div>
          <ul className="nav-links">
            <li><Link to="/"></Link></li>
            <li><Link to="/page14">My Bookings</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
            <li><Link to="#footer">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className="head1">Teleson's Hotel Services</h1>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <button onClick={logout} className="logout-button">Logout</button>
          ) : (
            <>
              <button onClick={handleLoginClick} className="login-button">Login</button>
              <button onClick={handleSignupClick} className="signup-button">Sign Up</button>
            </>
          )}
        </div>
      </div>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={ads2} style={{ width: '100%' }} alt="Ad 2" />
        </div>
        <div className="mySlides fade">
          <img src={ads4} style={{ width: '100%' }} alt="Ad 4" />
        </div>
        <div className="mySlides fade">
          <img src={ads3} style={{ width: '100%' }} alt="Ad 3" />
        </div>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="search-button">
        <Link to="/page13"><button>Search for Hotels</button></Link>
      </div>

      <section id="products">
        <h1 className="text-center my-5">Deals With Top Hotels</h1>
        <div className="row">
          <div className="col">
            <div className="card" onClick={() => valueSender(0)}>
              <img src={iphone} className="card-img-top" alt="iPhone 15 Pro Max" />
              <div className="card-body">
                <h5 className="card-title">Taj Coromandel</h5>
                <Link to="/product"><button onClick={() => valueSender(0)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => valueSender(1)}>
              <img src={samsung} className="card-img-top" alt="Samsung Galaxy S24 Ultra" />
              <div className="card-body">
                <h5 className="card-title">Vivanta Coimbatore</h5>
                <Link to="/product"><button onClick={() => valueSender(1)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => valueSender(2)}>
              <img src={google8} className="card-img-top" alt="Google Pixel 8 Pro" />
              <div className="card-body">
                <h5 className="card-title">Anantya By The Lake</h5>
                <Link to="/product"><button onClick={() => valueSender(2)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card" onClick={() => valueSender(3)}>
              <img src={samsung54} className="card-img-top" alt="Samsung Galaxy A54" />
              <div className="card-body">
                <h5 className="card-title">Kodai Resort Hotel</h5>
                <Link to="/product"><button onClick={() => valueSender(3)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => valueSender(4)}>
              <img src={google7} className="card-img-top" alt="Google Pixel 7" />
              <div className="card-body">
                <h5 className="card-title">Svatma</h5>
                <Link to="/product"><button onClick={() => valueSender(4)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => valueSender(5)}>
              <img src={vivo} className="card-img-top" alt="Vivo V27 Pro" />
              <div className="card-body">
                <h5 className="card-title">The Story Resorts Spa</h5>
                <Link to="/product"><button onClick={() => valueSender(5)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card" onClick={() => valueSender(6)}>
              <img src={oneplus} className="card-img-top" alt="OnePlus Nord CE 3 Lite" />
              <div className="card-body">
                <h5 className="card-title">The Carlton</h5>
                <Link to="/product"><button onClick={() => valueSender(6)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => valueSender(7)}>
              <img src={oppo} className="card-img-top" alt="Oppo A78" />
              <div className="card-body">
                <h5 className="card-title">La Woods Hotel</h5>
                <Link to="/product"><button onClick={() => valueSender(7)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={() => valueSender(8)}>
              <img src={poco} className="card-img-top" alt="Poco M4 5G" />
              <div className="card-body">
                <h5 className="card-title">Trident Hotel Chennai</h5>
                <Link to="/product"><button onClick={() => valueSender(8)} className="btn signin">More info...</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: 'rgb(219, 209, 209)', borderRadius: '50px' }}>
        <div className="body3">
          <div className="text">
            <h1>About Us</h1>
            <p>
            At Teleson, we redefine the art of hotel booking by seamlessly connecting travelers to extraordinary stays across the globe. Rooted in the belief that every journey deserves an exceptional start, we offer a user-friendly platform where you can access nearby hotels with a single click. Whether you're planning a last-minute stay or organizing your trip in advance, Teleson makes it easy to prebook your room effortlessly. From luxurious hotels to budget-friendly gems, our curated selection ensures you find the perfect accommodation that suits your style and preferences.            </p>
            <p>
            At the heart of Teleson is our commitment to excellence, innovation, and personalized service. By integrating advanced technology with a deep understanding of hospitality, we provide travelers with real-time availability, exclusive deals, and a seamless booking experience. Whether you're traveling for leisure or business, Teleson ensures your journey begins with trust, ease, and a touch of convenience. With Teleson, discovering and booking nearby hotels has never been this simple.            </p>
          </div>
          <img src={logo} alt="Teleson Logo" />
        </div>
      </div>

      <footer id="footer" className="body4">
        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Pricing</th>
              <th>Company</th>
              <th>Social</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ color: 'rgb(0, 0, 0)' }}>.</td>
            </tr>
            <tr>
              <td><Link to="https://example.com">Application</Link></td>
              <td><Link to="https://example.com">Overview</Link></td>
              <td><Link to="https://example.com">About us</Link></td>
              <td><Link to="https://example.com">Facebook</Link></td>
            </tr>
            <tr>
              <td><Link to="https://example.com">Documentation</Link></td>
              <td><Link to="https://example.com">Premium Plans</Link></td>
              <td><Link to="https://example.com">Blogs</Link></td>
              <td><Link to="https://example.com">Twitter</Link></td>
            </tr>
            <tr>
              <td><Link to="https://example.com">Systema</Link></td>
              <td><Link to="https://example.com">Affiliate Program</Link></td>
              <td><Link to="https://example.com">Partnership</Link></td>
              <td><Link to="https://example.com">Instagram</Link></td>
            </tr>
            <tr>
              <td><Link to="https://example.com">Application</Link></td>
              <td><Link to="https://example.com">Overview</Link></td>
              <td><Link to="https://example.com">About us</Link></td>
              <td><Link to="https://example.com">Facebook</Link></td>
            </tr>
            <tr>
              <td><Link to="https://example.com">FAQ</Link></td>
              <td><Link to="https://example.com">Promotions</Link></td>
              <td><Link to="https://example.com">Careers</Link></td>
              <td><Link to="https://example.com">LinkedIn</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="body5">
          <p style={{ marginLeft: '30px' }}>
            &copy; 2023 - 2024 teleson.store. All Rights Reserved.
          </p>
          <p style={{ marginLeft: '500px' }}>Email id: <a href="mailto:regiesinfant@gmail.com">telesons@gmail.com</a></p>
          <p>Phone Number: 9876543210</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
