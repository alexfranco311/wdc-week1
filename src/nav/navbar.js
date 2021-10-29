import React, { useState } from 'react';
import './navbar.css';

//const [navbarOpen, setNavbarOpen] = useState(false)

function Navbar() {
    return (
        <nav className="navbar">
                <div className="leftSide">
                    <div className="logo">
                        <a href="/">Sunny Codin' Iles</a>
                    </div>
                </div>
            <div className="rightSide">
                <ul className="links">
                    <a href="/">Location</a>
                    <a href="/">Attractions</a>
                    <a href="/">Reviews</a>
                </ul>
            </div>
                
        </nav>
    )
}

export default Navbar
