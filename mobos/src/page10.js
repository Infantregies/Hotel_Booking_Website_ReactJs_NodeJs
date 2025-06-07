// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Oppo1 from './images/oppo1.png';
import Oppo2 from './images/oppo2.png';
import Oppo3 from './images/oppo3.png';
import Oppo4 from './images/oppo4.png';
import Oppo5 from './images/oppo5.png';
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

            
            <div className="body333">
        <div className="body313">
            <div className="body444">
                <img src={Oppo1} alt="Hotel"/>
                <div className="body414">
                    <a href="https://example.com"><h2>Vivanta Vellore</h2></a>
                    <p>4.5/5 (1,200 Ratings)</p>
                    <ul>
                        <li>Modern amenities</li>
                        <li>Stylish rooms with luxury features</li>
                        <li>Located near Vellore Airport</li>
                        <li>Exceptional hospitality services</li>
                    </ul>
                    <h3>Price:</h3>
                    <p style={{ fontSize: '24px' }}>₹9,999 per night</p>
                    <p>Free Breakfast</p>
                    <p>Bookings Available</p>
                    <p>Popularity: High</p>
                </div>
            </div>
        </div>
    </div>

    <div className="body333">
        <div className="body313">
            <div className="body444">
                <img src={Oppo2} alt="Hotel"/>
                <div className="body414">
                    <a href="https://example.com"><h2>Fortune Select Grand Ridge</h2></a>
                    <p>4.3/5 (850 Ratings)</p>
                    <ul>
                        <li>Comfortable accommodations</li>
                        <li>Excellent dining options</li>
                        <li>Convenient location near NH-46</li>
                        <li>Business facilities available</li>
                    </ul>
                    <h3>Price:</h3>
                    <p style={{ fontSize: '24px' }}>₹7,499 per night</p>
                    <p>Free Breakfast</p>
                    <p>Bookings Available</p>
                    <p>Popularity: Medium</p>
                </div>
            </div>
        </div>
    </div>

    <div className="body333">
        <div className="body313">
            <div className="body444">
                <img src={Oppo3} alt="Hotel"/>
                <div className="body414">
                    <a href="https://example.com"><h2>Amala Gardens</h2></a>
                    <p>4.0/5 (1,050 Ratings)</p>
                    <ul>
                        <li>Spacious rooms</li>
                        <li>Located near VIT University</li>
                        <li>Quality services</li>
                        <li>Ideal for families and students</li>
                    </ul>
                    <h3>Price:</h3>
                    <p style={{ fontSize: '24px' }}>₹4,499 per night</p>
                    <p>Free Wi-Fi</p>
                    <p>Bookings Available</p>
                    <p>Popularity: Low</p>
                </div>
            </div>
        </div>
    </div>

    <div className="body333">
        <div className="body313">
            <div className="body444">
                <img src={Oppo4} alt="Hotel"/>
                <div className="body414">
                    <a href="https://example.com"><h2>Hotel Saravana Residency</h2></a>
                    <p>4.2/5 (500 Ratings)</p>
                    <ul>
                        <li>Strategic location near NH-46</li>
                        <li>Comfortable rooms</li>
                        <li>Friendly staff</li>
                        <li>Business and leisure services</li>
                    </ul>
                    <h3>Price:</h3>
                    <p style={{ fontSize: '24px' }}>₹3,999 per night</p>
                    <p>Free Parking</p>
                    <p>Bookings Available</p>
                    <p>Popularity: Medium</p>
                </div>
            </div>
        </div>
    </div>

    <div className="body333">
        <div className="body313">
            <div className="body444">
                <img src={Oppo5} alt="Hotel"/>
                <div className="body414">
                    <a href="https://example.com"><h2>GRT Grand</h2></a>
                    <p>4.7/5 (2,300 Ratings)</p>
                    <ul>
                        <li>Well-appointed rooms</li>
                        <li>Modern amenities</li>
                        <li>Excellent customer service</li>
                        <li>Located near the Railway Station</li>
                    </ul>
                    <h3>Price:</h3>
                    <p style={{ fontSize: '24px' }}>₹6,499 per night</p>
                    <p>Free Breakfast</p>
                    <p>Bookings Available</p>
                    <p>Popularity: High</p>
                </div>
            </div>
        </div>
    </div>
</div>

            


           
       
    );
};

export default Page1;
