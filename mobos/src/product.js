import React from 'react';
import { useLocation } from 'react-router-dom';
import './product.css';
import logo from './images/logo1.jpg';
import searchIcon from './images/search-icon.svg';
import shareIcon from './images/share-solid.svg';
import { Link } from 'react-router-dom';

const MobileProduct = () => {
  const location = useLocation();
  const { mobile } = location.state || {};

  if (!mobile) {
    return <div>No mobile details found.</div>;
  }

  const { name, image, details } = mobile;

  return (
    <div className="product">
      <header className="first">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Hotels</Link></li>
            <li><Link to="/page14">Lodges</Link></li>
            <li><Link to="/page13">Resorts</Link></li>
            <li><Link to="https://example.com">Share</Link></li>
          </ul>
        </nav>
      </header>

      <div className="mob1">
        <div className="mob2">
          <img
            src={image}
            id="mobile-image"
            alt={name}
            onMouseEnter={(e) => e.currentTarget.classList.add('zoom-in')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('zoom-in')}
          />
          <Link to="/payment"><button id="b1">Book</button></Link>
          <button id="b2">Cancel</button>
        </div>
        <div className="mob3">
          <div className="mob4">
            <h2>{name}</h2>
            <img src={shareIcon} alt="Share" />
          </div>
          <p style={{ color: 'rgb(130, 122, 122)' }}>4.6 star rating</p>
          <div id="pp">
            <h2>Price: {details.price}</h2>
            <p className="price">{details.originalPrice}</p>
          </div>
          <div className="heading-container">
            <h3>Highlights :</h3>
            <div className="elements">
              <ul>
                {details.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <h3>Easy Payment Options :</h3>
            <div className="elements">
              <ul>
                {details.paymentOptions.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
            <h3>Rooms Available :</h3>
            <div className="elements">
              <ul>
                {details.roomsAvailable.map((roomsAvailable, index) => (
                  <li key={index}>{roomsAvailable}</li>
                ))}
              </ul>
            </div>
            <h3>Description :</h3>
            <div className="elements">
              <p>{details.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProduct;
