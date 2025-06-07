// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Tec1 from './images/tec1.png';
import Tec2 from './images/tec2.png';
import Tec3 from './images/tec3.png';
import Tec4 from './images/tec4.png';
import Tec5 from './images/tec5.png';
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

            {/* Thanjavur Hotel Listings */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Tec1} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Radisson Blu Resort Temple Bay Mamallapuram</h2></a>
                            <p>Address: East Coast Road, Mamallapuram, Thanjavur, Tamil Nadu 603102</p>
                            <p>Description: A luxury resort offering stunning views, elegant accommodations, and top-notch amenities.</p>
                            <h3>Price: ₹9,999</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Very High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Tec2} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>The Gateway Hotel Thanjavur</h2></a>
                            <p>Address: Poonamallee Road, Thanjavur, Tamil Nadu 613501</p>
                            <p>Description: Provides comfortable rooms, excellent dining options, and comprehensive business facilities.</p>
                            <h3>Price: ₹5,500</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Tec3} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Hotel Sai Advaith</h2></a>
                            <p>Address: 32, Harbour Road, Thanjavur, Tamil Nadu 613001</p>
                            <p>Description: Known for its friendly staff, comfortable accommodations, and convenient location near major attractions.</p>
                            <h3>Price: ₹3,800</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Medium</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Tec4} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Grand Swagath Thanjavur</h2></a>
                            <p>Address: 3rd Street, Near Collectorate, Thanjavur, Tamil Nadu 613001</p>
                            <p>Description: Offers spacious rooms, quality services, and a strategic location for both business and leisure travelers.</p>
                            <h3>Price: ₹4,200</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Tec5} alt="Hotel" />
                        <div className="body414">
                            <a href="https://example.com"><h2>Hotel Priya Residency</h2></a>
                            <p>Address: 10, Ganga Street, Thanjavur, Tamil Nadu 613001</p>
                            <p>Description: A well-regarded hotel featuring comfortable rooms, excellent hospitality, and a convenient location.</p>
                            <h3>Price: ₹3,500</h3>
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
