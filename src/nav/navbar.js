import React from 'react';
import './navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
                <div className="leftSide">
                    <div className="logo">
                        <a href="/">Isla Sand</a>
                    </div>
                </div>
            <div className="rightSide">
                <div className="links">
                    <a href="/">Location</a>
                    <a href="/">Attractions</a>
                    <a href="/">Reviews</a>
                </div>
            </div>
                
        </nav>
    )
}

export default Navbar
