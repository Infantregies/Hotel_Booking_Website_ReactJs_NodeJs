// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import In1 from './images/in1.webp';
import In2 from './images/in2.png';
import In3 from './images/in3.avif';
import In4 from './images/in4.avif';
import In5 from './images/in5.png';
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

            {/* Sort and Filter Section */}
            <div className="body111">
                <p style={{ marginLeft: '108px' }}>Sort</p>
                <p style={{ marginLeft: '180px' }}>Price</p>
                <p style={{ marginLeft: '150px' }}>RAM</p>
                <p style={{ marginLeft: '140px' }}>Storage Capacity</p>
                <p style={{ marginLeft: '100px' }}>Network Type</p>
                <p style={{ marginLeft: '90px' }}>Customer Ratings</p>
            </div>

            <div className="body2">
                {/* Sort Options */}
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

            {/* Hotel Listings for Tirunelveli */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={In1} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>The Gateway Hotel, Tirunelveli</h2></a>
                            <p>Address: Surandai Road, Tirunelveli, Tamil Nadu 627002</p>
                            <p>Description: A luxury hotel offering comfortable accommodations, fine dining, and excellent hospitality services.</p>
                            <h3>Price: ₹5,000</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={In2} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Vivanta Tirunelveli</h2></a>
                            <p>Address: Near Manjolai, Tirunelveli, Tamil Nadu 627002</p>
                            <p>Description: Part of the Taj group, this hotel offers modern amenities, stylish rooms, and top-tier services.</p>
                            <h3>Price: ₹6,500</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Very High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={In3} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Sayaji Hotel, Tirunelveli</h2></a>
                            <p>Address: Near Court, Tirunelveli, Tamil Nadu 627001</p>
                            <p>Description: Known for its spacious rooms, quality services, and excellent dining options, making it a preferred choice for travelers.</p>
                            <h3>Price: ₹4,500</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Medium</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={In4} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Fortune Resort The Lakefront</h2></a>
                            <p>Address: Surandai Road, Tirunelveli, Tamil Nadu 627002</p>
                            <p>Description: Offers a serene environment with comfortable accommodations, recreational facilities, and superb hospitality.</p>
                            <h3>Price: ₹7,000</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={In5} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Grand Park Synthesis, Tirunelveli</h2></a>
                            <p>Address: Opposite Municipal Office, Tirunelveli, Tamil Nadu 627006</p>
                            <p>Description: A modern hotel featuring well-appointed rooms, excellent services, and a strategic location for business and leisure visitors.</p>
                            <h3>Price: ₹5,500</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page1;
