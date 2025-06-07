// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import Re1 from './images/red1.png';
import Re2 from './images/red2.png';
import Re3 from './images/red3.png';
import Re4 from './images/red4.png';
import Re5 from './images/red5.png';
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

            

           
            {/* New section for hotels in Tiruchirapalli (Trichy) */}

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Re1} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>SNR Grand Hotel</h2></a>
                            <p>Address: No. 6, Thanthai Periyar Salai, Tiruchirapalli, Tamil Nadu 620001</p>
                            <p>Description: A luxury hotel known for its elegant rooms, exceptional service, and extensive facilities including a spa and multiple dining options.</p>
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
                        <img src={Re2} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Radisson Blu Hotel Trichy</h2></a>
                            <p>Address: 4, Rajaji Salai, Tiruchirapalli, Tamil Nadu 620012</p>
                            <p>Description: Offers modern accommodations, excellent amenities, and superior hospitality services ideal for both business and leisure travelers.</p>
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
                        <img src={Re3} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Courtyard by Marriott Tiruchirapalli</h2></a>
                            <p>Address: Old Post Office Road, Trichy, Tamil Nadu 620012</p>
                            <p>Description: A contemporary hotel featuring stylish rooms, top-notch dining, and comprehensive business facilities.</p>
                            <h3>Price: ₹6,000</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: High</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Re4} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Hotel Deccan</h2></a>
                            <p>Address: No. 106, Tank Road, Tiruchirapalli, Tamil Nadu 620001</p>
                            <p>Description: Known for its comfortable rooms, friendly staff, and convenient location near major city attractions.</p>
                            <h3>Price: ₹4,000</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Medium</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={Re5} alt="Hotel"/>
                        <div className="body414">
                            <a href='https://example.com'><h2>Taj Trichy</h2></a>
                            <p>Address: Integrated Campus, Trichy, Tamil Nadu 620020</p>
                            <p>Description: A luxury resort offering a blend of comfort and elegance with excellent amenities and beautiful surroundings.</p>
                            <h3>Price: ₹10,000</h3>
                            <p>Booking Available: Yes</p>
                            <p>Popularity: Very High</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
