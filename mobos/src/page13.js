// Page1.js

import React from 'react';
import './page1.css';
import logo from './images/logo1.jpg';
import G1 from './images/g1.jpg';
import G2 from './images/g2.jpg';
import G3 from './images/g3.avif';
import G4 from './images/g4.jpg';
import G5 from './images/g5.avif';
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
                        <li><Link to="/page14">Bookings</Link></li>
                        <li><Link to="/page13">Contact</Link></li>
                        <li><Link to="https://example.com">Share</Link></li>
                    </ul>
                </nav>
            </header>


            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={G1} alt="Hotel"/>
                        <div className="body414">
                            <h2>Hotel Sriram JB Residency</h2>
                            <p>Price: ₹2,500 per night</p>
                            <p>Location: Sivagami Puram, Virudhunagar</p>
                            <p>Rating: 4.1/5 (257 Reviews)</p>
                            <p>Availability: Available for booking</p>
                            <p>Facilities: Free WiFi, Parking, Restaurant</p>
                            <p>Book now to enjoy a comfortable stay with premium amenities.</p>
                            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={G2} alt="Hotel"/>
                        <div className="body414">
                            <h2>Sri Sakthi Residency</h2>
                            <p>Price: ₹2,200 per night</p>
                            <p>Location: Near Parasakthi Mariamman Temple, Virudhunagar</p>
                            <p>Rating: 4.2/5 (312 Reviews)</p>
                            <p>Availability: Available for booking</p>
                            <p>Facilities: Free WiFi, Air-conditioned rooms, 24/7 Reception</p>
                            <p>Book now for a peaceful stay close to major tourist spots.</p>
                            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={G3} alt="Hotel"/>
                        <div className="body414">
                            <h2>Hotel Bombay A/C</h2>
                            <p>Price: ₹2,000 per night</p>
                            <p>Location: Rajapalayam Road, Virudhunagar</p>
                            <p>Rating: 4.0/5 (180 Reviews)</p>
                            <p>Availability: Limited rooms available</p>
                            <p>Facilities: AC Rooms, Free WiFi, Room Service</p>
                            <p>Book now for a budget-friendly stay with essential amenities.</p>
                            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={G4} alt="Hotel"/>
                        <div className="body414">
                            <h2>Ananda Lodge Rajapalayam</h2>
                            <p>Price: ₹1,800 per night</p>
                            <p>Location: Rajapalayam, Virudhunagar</p>
                            <p>Rating: 3.8/5 (130 Reviews)</p>
                            <p>Availability: Available for booking</p>
                            <p>Facilities: Free WiFi, 24/7 Reception</p>
                            <p>Book now to stay in a clean and comfortable lodge at affordable rates.</p>
                            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="body333">
                <div className="body313">
                    <div className="body444">
                        <img src={G5} alt="Hotel"/>
                        <div className="body414">
                            <h2>Hotel Nandha</h2>
                            <p>Price: ₹3,000 per night</p>
                            <p>Location: Virudhunagar Junction, Virudhunagar</p>
                            <p>Rating: 4.3/5 (400 Reviews)</p>
                            <p>Availability: Available for booking</p>
                            <p>Facilities: Free Parking, Free WiFi, Restaurant</p>
                            <p>Book now and enjoy a stay with modern amenities and easy access to transport.</p>
                            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;
