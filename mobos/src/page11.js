// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Poco1 from './images/poco1.webp'; // Keep original image
import Poco2 from './images/poco2.png'; // Keep original image
import Poco3 from './images/poco3.png'; // Keep original image
import Poco4 from './images/poco4.webp'; // Keep original image
import Poco5 from './images/poco5.png'; // Keep original image
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
                <p style={{ marginLeft: '90px' }}>Availability</p>
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
                    <option value="1">1000 and below</option>
                    <option value="2">1500 - 3000</option>
                    <option value="3">3000 - 5000</option>
                    <option value="4">5000 - 10000</option>
                    <option value="5">10000 and above</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">Tirupur</option>
                    <option value="2">Chennai</option>
                    <option value="3">Coimbatore</option>
                </select>
                <select className="sort" name="cars" id="cars">
                    <option value="1">Popular</option>
                    <option value="2">Newest</option>
                    <option value="3">Best Rated</option>
                </select>
            </div>

            {/* Hotel 1 */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Poco1} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Grand Paradise</h2></a>
                            <p>4.5 star rating | 500+ Reviews</p>
                            <ul>
                                <li>Luxurious Rooms</li>
                                <li>Fine Dining Options</li>
                                <li>Top-notch Hospitality Services</li>
                            </ul>
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
                        <img src={Poco2} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>The Gateway Hotel Tirupur</h2></a>
                            <p>4.2 star rating | 400+ Reviews</p>
                            <ul>
                                <li>Comfortable Accommodations</li>
                                <li>Excellent Service</li>
                                <li>Strategic Location</li>
                            </ul>    
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
                        <img src={Poco3} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Sterline Hotel</h2></a>
                            <p>4.3 star rating | 450+ Reviews</p>
                            <ul>
                                <li>Modern Amenities</li>
                                <li>Spacious Rooms</li>
                                <li>Friendly Environment</li>
                            </ul>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹4,200</p>
                            <p>Free Delivery</p>
                            <p>Book Today for Best Rates</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotel 4 */}
            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Poco4} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Saravana Residency</h2></a>
                            <p>4.0 star rating | 300+ Reviews</p>
                            <ul>
                                <li>Comfortable Rooms</li>
                                <li>Quality Services</li>
                                <li>Convenient Location</li>
                            </ul>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹3,000</p>
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
                        <img src={Poco5} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Hotel Green Park</h2></a>
                            <p>4.1 star rating | 350+ Reviews</p>
                            <ul>
                                <li>Comfortable Accommodations</li>
                                <li>Excellent Dining Options</li>
                                <li>Strategic Location</li>
                            </ul>
                            <h3>Price per Night:</h3>
                            <p style={{ fontSize: '24px' }}>₹4,000</p>
                            <p>Free Delivery</p>
                            <p>Exclusive Discounts for Early Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
