// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Vivo1 from './images/vivo1.webp';
import Vivo2 from './images/vivo2.webp';
import Vivo3 from './images/vivo3.png';
import Vivo4 from './images/vivo4.png';
import Vivo5 from './images/vivo5.png';
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
                <p style={{ marginLeft: '150px' }}>Ratings</p>
                <p style={{ marginLeft: '140px' }}>Location</p>
            </div>

            <div className="body2">
                <select className="sort" name="sort" id="sort">
                    <option value="1">Relevance</option>
                    <option value="2">Popularity</option>
                    <option value="3">Price: Low to High</option>
                    <option value="4">Price: High to Low</option>
                </select>
                <select className="sort" name="price" id="price">
                    <option value="1">1000 and below</option>
                    <option value="2">1000 - 5000</option>
                    <option value="3">5000 - 10000</option>
                    <option value="4">10000 and above</option>
                </select>
                <select className="sort" name="ratings" id="ratings">
                    <option value="1">5 Star</option>
                    <option value="2">4 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">2 Star</option>
                </select>
                <select className="sort" name="location" id="location">
                    <option value="1">Central Salem</option>
                    <option value="2">Near Kadirayan Hills</option>
                    <option value="3">Yercaud Road</option>
                    <option value="4">Amaravathi Road</option>
                </select>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Vivo1} alt="Product"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Hotel JW Salem</h2></a>
                            <p>Address: 2nd Floor, CSI Centre, Periyar Street, Salem, Tamil Nadu 636003</p>
                            <p>Description: A premium hotel offering luxurious rooms, fine dining, and excellent hospitality services.</p>
                            <h3>Price: ₹5,000</h3>
                            <p>Ratings: 4.5/5</p>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Vivo2} alt="Product"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>The Gateway Hotel Kadirayan Hills</h2></a>
                            <p>Address: Sadak Complex, Salem, Tamil Nadu 636005</p>
                            <p>Description: Located near Kadirayan Hills, this hotel offers comfortable accommodations with stunning views and modern amenities.</p>
                            <h3>Price: ₹7,000</h3>
                            <p>Ratings: 4.7/5</p>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Very High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Vivo3} alt="Product"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Kaveri Residency</h2></a>
                            <p>Address: No. 24, Yercaud Road, Salem, Tamil Nadu 636006</p>
                            <p>Description: Known for its spacious rooms, friendly staff, and excellent dining options, making it a popular choice among travelers.</p>
                            <h3>Price: ₹4,500</h3>
                            <p>Ratings: 4.3/5</p>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Medium</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Vivo4} alt="Product"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Fortune Park Crescent Salem</h2></a>
                            <p>Address: No. 122, College Road, Salem, Tamil Nadu 636001</p>
                            <p>Description: A contemporary hotel offering stylish rooms, comprehensive business facilities, and superb dining experiences.</p>
                            <h3>Price: ₹6,500</h3>
                            <p>Ratings: 4.6/5</p>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Vivo5} alt="Product"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Royal Hotel Salem</h2></a>
                            <p>Address: No. 10, Amaravathi Road, Salem, Tamil Nadu 636003</p>
                            <p>Description: Offers comfortable accommodations, quality services, and a strategic location for both business and leisure travelers.</p>
                            <h3>Price: ₹4,000</h3>
                            <p>Ratings: 4.2/5</p>
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
