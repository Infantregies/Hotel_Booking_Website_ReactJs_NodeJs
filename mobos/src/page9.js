// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Moto1 from './images/moto1.png';
import Moto2 from './images/moto2.png';
import Moto3 from './images/moto3.png';
import Moto4 from './images/moto4.png';
import Moto5 from './images/moto5.png';
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
                        <li><Link to="/">Mobiles</Link></li>
                        <li><Link to="/page14">Laptops</Link></li>
                        <li><Link to="/page13">Electronic Gadgets</Link></li>
                        <li><Link to="https://example.com">Share</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="body111">
                <p style={{ marginLeft: '108px' }}>Sort</p>
                <p style={{ marginLeft: '180px' }}>Price</p>
                <p style={{ marginLeft: '150px' }}>RAM</p>
                <p style={{ marginLeft: '140px' }}>Storage Capacity</p>
                <p style={{ marginLeft: '100px' }}>Network Type</p>
                <p style={{ marginLeft: '90px' }}>Customer Ratings</p>
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
                    <option value="1">10000 and below</option>
                    <option value="2">15000 - 20000</option>
                    <option value="3">20000 - 30000</option>
                    <option value="4">30000 - 50000</option>
                    <option value="5">50000 and above</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">4 GB</option>
                    <option value="2">6 GB</option>
                    <option value="3">8 GB</option>
                    <option value="4">3 GB or 2 GB</option>
                    <option value="5">12 GB</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">256 GB</option>
                    <option value="2">128 GB</option>
                    <option value="3">64 GB</option>
                    <option value="4">32 GB</option>
                    <option value="5">16 GB</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">5G</option>
                    <option value="2">4G</option>
                    <option value="3">3G</option>
                    <option value="4">2G</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">5 star</option>
                    <option value="2">4 star and above</option>
                    <option value="3">3 star and above</option>
                    <option value="4">2 star and above</option>
                    <option value="5">2 star below</option>
                </select>
            </div>

            {/* Erode Hotel Listings */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Moto1} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Sterling Ooty Fern Hotel</h2></a>
                            <p>Address: 105, Trichy Road, Erode, Tamil Nadu 638004</p>
                            <p>Description: A luxury hotel offering elegant accommodations, fine dining, and excellent service standards.</p>
                            <h3>Price: ₹7,500</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Very High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Moto2} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>ITC Emerald Erode</h2></a>
                            <p>Address: Near CBG Post, Kunnathur, Erode, Tamil Nadu 638004</p>
                            <p>Description: Known for its luxurious rooms, comprehensive amenities, and superior hospitality services.</p>
                            <h3>Price: ₹10,000</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Moto3} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Hotel La Palace</h2></a>
                            <p>Address: No. 21, Opposite B.G. Road, Erode, Tamil Nadu 638001</p>
                            <p>Description: Offers comfortable accommodations, quality services, and a convenient location for travelers.</p>
                            <h3>Price: ₹5,000</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Medium</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Moto4} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Fortune JP Tower Erode</h2></a>
                            <p>Address: 77, Off Trichy Road, Erode, Tamil Nadu 638001</p>
                            <p>Description: A contemporary hotel featuring stylish rooms, excellent dining options, and modern amenities.</p>
                            <h3>Price: ₹6,500</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Moto5} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Hotel Sakthi Residency</h2></a>
                            <p>Address: No. 45, Periyar Street, Erode, Tamil Nadu 638001</p>
                            <p>Description: Known for its friendly staff, comfortable rooms, and strategic location near business and leisure spots.</p>
                            <h3>Price: ₹3,800</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Medium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
