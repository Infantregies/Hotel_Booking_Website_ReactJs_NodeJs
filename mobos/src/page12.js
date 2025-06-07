// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import searchIcon from './images/search-icon.svg';
import { Link } from 'react-router-dom';

// Original Image Names (no change)
import Iq1 from './images/iq1.png';
import Iq2 from './images/iq2.png';
import Iq3 from './images/iq3.png';
import Iq4 from './images/iq4.png';
import Iq5 from './images/iq5.webp';

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
                        <li><Link to="/page14">Laptops</Link></li>
                        <li><Link to="/page13">Electronic Gadgets</Link></li>
                        <li><Link to="https://example.com">Share</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="body111">
                <p style={{ marginLeft: '108px' }}>Sort</p>
                <p style={{ marginLeft: '180px' }}>Price</p>
                <p style={{ marginLeft: '150px' }}>Location</p>
                <p style={{ marginLeft: '140px' }}>Popularity</p>
                <p style={{ marginLeft: '100px' }}>Ratings</p>
            </div>

            <div className="body2">
                <select className="sort" name="sort" id="sort">
                    <option value="1">Relevance</option>
                    <option value="2">Popularity</option>
                    <option value="3">Price: Low to High</option>
                    <option value="4">Price: High to Low</option>
                    <option value="5">Newest First</option>
                </select>
                <select className="sort" name="price" id="price">
                    <option value="1">1000 and below</option>
                    <option value="2">1500 - 3000</option>
                    <option value="3">3000 - 5000</option>
                    <option value="4">5000 - 10000</option>
                    <option value="5">10000 and above</option>
                </select>
                <select className="sort" name="location" id="location">
                    <option value="1">Dindigul</option>
                    <option value="2">Chennai</option>
                    <option value="3">Coimbatore</option>
                </select>
                <select className="sort" name="popularity" id="popularity">
                    <option value="1">Popular</option>
                    <option value="2">Newest</option>
                    <option value="3">Best Rated</option>
                </select>
            </div>

            {/* Hotel 1 */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iq1} alt="Grand Palms Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Grand Palms Hotel</h2></a>
                            <p>Luxury hotel offering elegant rooms, fine dining, and superior hospitality services.</p>
                            <p>Address: No. 45, Main Road, Dindigul, Tamil Nadu 624001</p>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹5,000</p>
                            <p>Free Cancellation</p>
                            <p>Popular among tourists</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotel 2 */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iq2} alt="Hotel Rama International"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Hotel Rama International</h2></a>
                            <p>Known for its comfortable accommodations, quality services, and convenient location.</p>
                            <p>Address: 21, Thadikombu Road, Dindigul, Tamil Nadu 624001</p>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹3,500</p>
                            <p>Free Delivery</p>
                            <p>Special Offer: Book Now & Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotel 3 */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iq3} alt="Fortune Janasree"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Fortune Janasree</h2></a>
                            <p>Offers modern amenities, spacious rooms, and excellent dining options, ideal for both business and leisure travelers.</p>
                            <p>Address: No. 12, Main Road, Dindigul, Tamil Nadu 624001</p>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹4,500</p>
                            <p>Free Cancellation</p>
                            <p>Exclusive Packages for Long Stays</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotel 4 */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iq4} alt="Hotel Rohini"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Hotel Rohini</h2></a>
                            <p>Provides comfortable rooms, friendly staff, and a strategic location near major attractions.</p>
                            <p>Address: No. 5, New Bus Stand Road, Dindigul, Tamil Nadu 624001</p>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹3,200</p>
                            <p>Free Delivery</p>
                            <p>Limited Rooms Available</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotel 5 */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iq5} alt="The Zuri Palkulam"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>The Zuri Palkulam</h2></a>
                            <p>A boutique hotel offering personalized services, comfortable accommodations, and a serene environment.</p>
                            <p>Address: Palkulam, Dindigul, Tamil Nadu 624001</p>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹5,800</p>
                            <p>Free Cancellation</p>
                            <p>Special Rates for Group Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
