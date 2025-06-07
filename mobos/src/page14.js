// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import L1 from './images/ho5.jpeg';
import L2 from './images/ho6.jpeg';
import L3 from './images/ho10.jpeg';
import L4 from './images/ho9.jpeg';
import L5 from './images/ho8.jpeg';
import L6 from './images/ho7.avif';
import L7 from './images/ho4.jpg';
import L8 from './images/ho3.jpeg';
import L9 from './images/ho2.jpeg';
import L10 from './images/ho1.png';
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
                        <li><Link to="/page14">Luxury Stays</Link></li>
                        <li><Link to="/page13">Budget Stays</Link></li>
                        <li><Link to="https://example.com">Share</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L1} alt="Hotel"/>
                        <div className="body414">
                            <h2>Grand Palace Hotel & Spa, Yercaud</h2>
                            <p>4,800 Ratings & 350 Reviews</p>
                            <ul>
                                <li>Located in Salem District</li>
                                <li>Luxury Rooms with Valley View</li>
                                <li>Spa and Wellness Center</li>
                                <li>Multi-cuisine Restaurant</li>
                                <li>Free Wi-Fi and Parking</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹7,499 per night</p>
                            <p>Complimentary Breakfast</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L2} alt="Hotel"/>
                        <div className="body414">
                            <h2>The Gateway Hotel, Madurai</h2>
                            <p>3,500 Ratings & 280 Reviews</p>
                            <ul>
                                <li>Located near Meenakshi Temple</li>
                                <li>Spacious Rooms with City View</li>
                                <li>Swimming Pool and Gym</li>
                                <li>Traditional South Indian Cuisine</li>
                                <li>Free Wi-Fi</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹6,299 per night</p>
                            <p>Free Cancellation</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L3} alt="Hotel"/>
                        <div className="body414">
                            <h2>Radisson Blu Resort, Mahabalipuram</h2>
                            <p>4,200 Ratings & 400 Reviews</p>
                            <ul>
                                <li>Located on the East Coast Road</li>
                                <li>Beachfront Luxury Resort</li>
                                <li>Infinity Pool and Spa</li>
                                <li>Seafood Specialties</li>
                                <li>Conference and Banquet Facilities</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹12,499 per night</p>
                            <p>Breakfast Included</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L4} alt="Hotel"/>
                        <div className="body414">
                            <h2>Courtyard by Marriott, Chennai</h2>
                            <p>3,800 Ratings & 320 Reviews</p>
                            <ul>
                                <li>Located in the Heart of the City</li>
                                <li>Modern Rooms with Luxury Amenities</li>
                                <li>24/7 Fitness Center</li>
                                <li>International Buffet</li>
                                <li>Free Wi-Fi and Airport Transfers</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹8,999 per night</p>
                            <p>Complimentary Dinner</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L5} alt="Hotel"/>
                        <div className="body414">
                            <h2>Hotel TamilNadu, Kodaikanal</h2>
                            <p>3,000 Ratings & 260 Reviews</p>
                            <ul>
                                <li>Located in Dindigul District</li>
                                <li>Hilltop Rooms with Scenic View</li>
                                <li>Multi-cuisine Dining</li>
                                <li>Kids Play Area and Garden</li>
                                <li>Free Wi-Fi and Parking</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹4,499 per night</p>
                            <p>Limited Time Offer</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L6} alt="Hotel"/>
                        <div className="body414">
                            <h2>WelcomHotel by ITC, Coimbatore</h2>
                            <p>4,100 Ratings & 310 Reviews</p>
                            <ul>
                                <li>Located in Coimbatore City</li>
                                <li>Modern Business Hotel</li>
                                <li>Rooftop Pool and Bar</li>
                                <li>Exclusive South Indian Cuisine</li>
                                <li>Free Wi-Fi and Gym Access</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹7,299 per night</p>
                            <p>Free Breakfast</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L7} alt="Hotel"/>
                        <div className="body414">
                            <h2>Heritage Madurai, Madurai</h2>
                            <p>4,500 Ratings & 380 Reviews</p>
                            <ul>
                                <li>Located in Madurai</li>
                                <li>Restored Colonial Architecture</li>
                                <li>Villas with Private Pools</li>
                                <li>Traditional Tamil Cuisine</li>
                                <li>Spa and Wellness Facilities</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹10,999 per night</p>
                            <p>Free Welcome Drink</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L8} alt="Hotel"/>
                        <div className="body414">
                            <h2>Taj Fisherman’s Cove, Chennai</h2>
                            <p>5,000 Ratings & 450 Reviews</p>
                            <ul>
                                <li>Located on Covelong Beach</li>
                                <li>Beachfront Luxury Cottages</li>
                                <li>Seafood Specialties</li>
                                <li>Swimming Pool and Spa</li>
                                <li>Free Wi-Fi</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹15,499 per night</p>
                            <p>Complimentary Breakfast</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L9} alt="Hotel"/>
                        <div className="body414">
                            <h2>Hotel Parisutham, Thanjavur</h2>
                            <p>3,800 Ratings & 300 Reviews</p>
                            <ul>
                                <li>Located near Brihadeeswarar Temple</li>
                                <li>Comfortable Family Suites</li>
                                <li>Authentic Tamil Cuisine</li>
                                <li>Swimming Pool</li>
                                <li>Free Wi-Fi and Parking</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹5,499 per night</p>
                            <p>Special Discounts for Families</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={L10} alt="Hotel"/>
                        <div className="body414">
                            <h2>Cliff Top Resort, Ooty</h2>
                            <p>4,900 Ratings & 420 Reviews</p>
                            <ul>
                                <li>Located in Nilgiris</li>
                                <li>Mountain View Rooms</li>
                                <li>Campfire and Barbecue Facilities</li>
                                <li>Nature Trails and Guided Tours</li>
                                <li>Free Wi-Fi and Parking</li>
                            </ul>
                            <h3>Price :</h3>
                            <p style={{ fontSize: '24px' }}>₹8,299 per night</p>
                            <p>Breakfast Included</p>
                            <p style={{ color: 'green' }}>BOOKED SUCCESSFULLY</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page1;
