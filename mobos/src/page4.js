// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import One1 from './images/one1.png';
import One2 from './images/one2.png';
import One3 from './images/one3.png';
import One4 from './images/one4.png';
import One5 from './images/one5.png';
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

            <div className="body111">
                <p style={{ marginLeft: '108px' }}>Sort</p>
                <p style={{ marginLeft: '180px' }}>Price</p>
                <p style={{ marginLeft: '150px' }}>Rating</p>
            </div>

            <div className="body2">
                <select className="sort" name="cars" id="cars">
                    <option value="1">Relevance</option>
                    <option value="2">Popularity</option>
                    <option value="3">Price: Low to High</option>
                    <option value="4">Price: High to Low</option>
                    <option value="5">Newest First</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">Below ₹5000</option>
                    <option value="2">₹5000 - ₹10000</option>
                    <option value="3">₹10000 - ₹20000</option>
                    <option value="4">₹20000 - ₹30000</option>
                    <option value="5">Above ₹30000</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">5 Star</option>
                    <option value="2">4 Star and Above</option>
                    <option value="3">3 Star and Above</option>
                    <option value="4">2 Star and Above</option>
                </select>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={One1} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>The Gateway Hotel Pasumalai Madurai</h2></a>
                            <p>Luxurious heritage hotel offering panoramic views of the city.</p>
                            <p>5 Star Hotel | ₹11,999 per night</p>
                            <p>Free Wi-Fi | Pool | Spa</p>
                            <p>Available for Booking</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={One2} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Courtyard by Marriott Madurai</h2></a>
                            <p>Contemporary rooms with excellent business facilities.</p>
                            <p>4 Star Hotel | ₹7,499 per night</p>
                            <p>Free Wi-Fi | Gym | Restaurant</p>
                            <p>Available for Booking</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={One3} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Heritage Madurai</h2></a>
                            <p>Luxury resort reflecting the city's rich cultural heritage.</p>
                            <p>5 Star Hotel | ₹13,999 per night</p>
                            <p>Free Wi-Fi | Spa | Gym</p>
                            <p>Available for Booking</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={One4} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Poppys Hotel Madurai</h2></a>
                            <p>Warm hospitality and modern amenities for business and leisure.</p>
                            <p>3 Star Hotel | ₹5,499 per night</p>
                            <p>Free Wi-Fi | Restaurant | Parking</p>
                            <p>Available for Booking</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={One5} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Amika Hotel, Madurai - Near Airport</h2></a>
                            <p>Convenient location with contemporary facilities near the airport.</p>
                            <p>3 Star Hotel | ₹4,999 per night</p>
                            <p>Free Wi-Fi | Parking | Restaurant</p>
                            <p>Available for Booking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
