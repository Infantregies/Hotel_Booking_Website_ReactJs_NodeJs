// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Sam1 from './images/ho1.png';
import Sam2 from './images/ho2.jpeg';
import Sam3 from './images/sam3.webp';
import Sam4 from './images/sam4.png';
import Sam5 from './images/sam5.webp';
import searchIcon from './images/search-icon.svg';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <div>
            <header className="first">
                <nav className="navbar">
                    <div className="logo">
                        <a href="https://example.com"><img src={logo} alt="Logo" /></a>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><img src={searchIcon} alt="Search" /></button>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Hotels</Link></li>
                        <li><Link to="/page14">Lodges</Link></li>
                        <li><Link to="/page13">Resorts</Link></li>
                        <li><Link to="https://example.com">Share</Link></li>
                    </ul>
                </nav>
            </header>


            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Sam1} alt="Hotel"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>ITC Grand Chola, a Luxury Collection Hotel</h2></a>
                            <p>Renowned for its grand architecture, luxurious rooms, and exceptional services, ITC Grand Chola offers an unparalleled hospitality experience.</p>
                            <p>Location: No. 63, Mount Road, Guindy, Chennai, Tamil Nadu 600032</p>
                            <h3>Price: ₹12,999</h3>
                            <p>Free Cancellation</p>
                            <p>Exclusive Offers Available</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Sam2} alt="Hotel"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>Taj Coromandel</h2></a>
                            <p>A prestigious hotel blending South Indian warmth with contemporary elegance, featuring world-class amenities and dining options.</p>
                            <p>Location: 37, Mahatma Gandhi Road, Nungambakkam, Chennai, Tamil Nadu 600034</p>
                            <h3>Price: ₹11,499</h3>
                            <p>Free Cancellation</p>
                            <p>Special Offers for Early Bookings</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Sam3} alt="Hotel"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>The Leela Palace Chennai</h2></a>
                            <p>A sea-facing hotel known for its opulent design, lavish interiors, and top-notch facilities, including a spa and multiple dining venues.</p>
                            <p>Location: Adyar Seaface, M.R.C Nagar, Chennai, Tamil Nadu 600028</p>
                            <h3>Price: ₹18,999</h3>
                            <p>Free Cancellation</p>
                            <p>Special Discounts on Stay Packages</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Sam4} alt="Hotel"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>Park Hyatt Chennai</h2></a>
                            <p>Offers personalized services, modern amenities, and elegantly designed rooms, making it a favorite among business and leisure travelers.</p>
                            <p>Location: 39, Velachery Road, Near Raj Bhavan, Chennai, Tamil Nadu 600032</p>
                            <h3>Price: ₹9,999</h3>
                            <p>Free Cancellation</p>
                            <p>Exclusive Deals for Members</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Sam5} alt="Hotel"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>Hyatt Regency Chennai</h2></a>
                            <p>Centrally located with spacious rooms, excellent dining options, and comprehensive business facilities.</p>
                            <p>Location: 365, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018</p>
                            <h3>Price: ₹10,499</h3>
                            <p>Free Cancellation</p>
                            <p>Stay More, Save More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
