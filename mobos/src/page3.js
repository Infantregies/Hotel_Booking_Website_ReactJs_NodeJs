// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Real1 from './images/real1.png';
import Real2 from './images/real2.png';
import Real3 from './images/real3.png';
import Real4 from './images/real4.webp';
import Real5 from './images/real5.webp';
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

            {/* Vivanta Coimbatore */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Real1} alt="Vivanta Coimbatore"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Vivanta Coimbatore</h2></a>
                            <p>Address: 105, Race Course Road, Coimbatore, Tamil Nadu 641018</p>
                            <p>Description: A stylish hotel offering modern comforts, exceptional hospitality, and state-of-the-art facilities.</p>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹10,999 / night</p>
                            <p>Available for booking</p>
                            <a href="https://example.com/book" className="book-now-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Le Meridien Coimbatore */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Real2} alt="Le Meridien Coimbatore"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Le Meridien Coimbatore</h2></a>
                            <p>Address: 762, Avinashi Road, Neelambur Village, Coimbatore, Tamil Nadu 641062</p>
                            <p>Description: Known for its elegant design, luxurious rooms, and top-notch services, making it ideal for both business and leisure travelers.</p>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹15,499 / night</p>
                            <p>Available for booking</p>
                            <a href="https://example.com/book" className="book-now-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Residency Towers Coimbatore */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Real3} alt="The Residency Towers Coimbatore"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>The Residency Towers Coimbatore</h2></a>
                            <p>Address: 1076, Avinashi Road, Coimbatore, Tamil Nadu 641018</p>
                            <p>Description: A premium hotel offering a blend of comfort and sophistication with excellent dining and recreational facilities.</p>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹12,499 / night</p>
                            <p>Available for booking</p>
                            <a href="https://example.com/book" className="book-now-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Radisson Blu Coimbatore */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Real4} alt="Radisson Blu Coimbatore"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Radisson Blu Coimbatore</h2></a>
                            <p>Address: 164-165, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004</p>
                            <p>Description: A contemporary hotel known for its excellent amenities, stylish rooms, and superior service.</p>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹14,999 / night</p>
                            <p>Available for booking</p>
                            <a href="https://example.com/book" className="book-now-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fairfield by Marriott Coimbatore */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Real5} alt="Fairfield by Marriott Coimbatore"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Fairfield by Marriott Coimbatore</h2></a>
                            <p>Address: 469/2B, Airport Road, Coimbatore, Tamil Nadu 641014</p>
                            <p>Description: A modern hotel offering comfortable accommodations, convenient location near the airport, and quality services.</p>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹9,999 / night</p>
                            <p>Available for booking</p>
                            <a href="https://example.com/book" className="book-now-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page1;
