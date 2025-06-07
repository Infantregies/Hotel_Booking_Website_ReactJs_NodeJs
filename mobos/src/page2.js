import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Iphone1 from './images/Iphone1.png'; // Keep the same image paths
import Iphone2 from './images/Iphone2.png';
import Iphone3 from './images/Iphone3.png';
import Iphone4 from './images/Iphone4.png';
import Iphone5 from './images/Iphone5.png';
import { Link } from 'react-router-dom';
import searchIcon from './images/search-icon.svg';

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
                        <img src={Iphone1} alt="Product"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Sriram JB Residency</h2></a>
                            <p>Rated 4.5/5 on TripAdvisor</p>
                            <ul>
                                <li>Located in Virudhunagar, India</li>
                                <li>Comfortable accommodations</li>
                                <li>Quality services, preferred choice among travelers</li>
                            </ul>
                            <h3>Price: $99/night</h3>
                            <p style={{ fontSize: '24px' }}>Special Discount: 20% off</p>
                            <p>Free Breakfast</p>
                            <p>Available for booking now!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iphone2} alt="Product"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>Temple Tree Residence</h2></a>
                            <p>Rated 4.3/5 on Expedia</p>
                            <ul>
                                <li>Located in Virudhunagar, India</li>
                                <li>Serene environment</li>
                                <li>Modern amenities for a pleasant stay</li>
                            </ul>
                            <h3>Price: $120/night</h3>
                            <p style={{ fontSize: '24px' }}>Lowest Price Guaranteed</p>
                            <p>Free Wi-Fi</p>
                            <p>Book now for exclusive offers!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iphone3} alt="Product"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>Bell Hotel Sivakasi</h2></a>
                            <p>Rated 4.2/5 on Expedia</p>
                            <ul>
                                <li>Located in Sivakasi, India</li>
                                <li>Comfortable rooms</li>
                                <li>Excellent hospitality services</li>
                            </ul>
                            <h3>Price: $85/night</h3>
                            <p style={{ fontSize: '24px' }}>Limited Time Offer: 15% off</p>
                            <p>Free Pickup Service</p>
                            <p>Only 3 rooms left!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iphone4} alt="Product"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>Mangalam Residency</h2></a>
                            <p>Rated 4.0/5 on Expedia</p>
                            <ul>
                                <li>Located in Virudhunagar, India</li>
                                <li>Well-appointed rooms</li>
                                <li>Range of facilities to ensure a comfortable stay</li>
                            </ul>
                            <h3>Price: $75/night</h3>
                            <p style={{ fontSize: '24px' }}>Book now for a 10% discount</p>
                            <p>Free Parking</p>
                            <p>Discount available for long stays</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Iphone5} alt="Product"/>
                        <div className="body414">
                        <a href='https://example.com'><h2>Sri Ambal Residency</h2></a>
                            <p>Rated 4.1/5 on MakeMyTrip</p>
                            <ul>
                                <li>Located in Virudhunagar, India</li>
                                <li>Quality accommodations</li>
                                <li>Focus on guest satisfaction</li>
                            </ul>
                            <h3>Price: $110/night</h3>
                            <p style={{ fontSize: '24px' }}>Special Offer: Free Dinner</p>
                            <p>Free Cancellation</p>
                            <p>Book early for exclusive perks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
