import React from 'react';
import styled from 'styled-components';
import Hamburger from './hamburger';
import Links from './links';

//const [navbarOpen, setNavbarOpen] = useState(false)

const sNav = styled.nav`
    background-color: #EFF8F3;
    width: 100%;
    height: 80px;
    margin: 0 0 1em 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #479AD1;
    color: #26727E;    
    
@font-face {
    font-family: 'Playfair Display', Serif;
    Font-Family: 'Source Sans Pro', Sans-Serif;
    src: url(https://fonts.googleapis.com/css?family=Playfair+Display:400,700,700i|Source+Sans+Pro);
}

.navbar {
    background-color: #EFF8F3;
    width: 100%;
    height: 80px;
    margin: 0 0 1em 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #479AD1;
    color: #26727E;
}

.navbar a {
    color: #26727E;
    text-decoration: none;
}

.logo {
    text-decoration: none;
    padding: 20px 0;
    font-family: 'Playfair Display';
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    margin-left: 15px;
}
`;

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/">Sunny Codin' Iles</a>
            </div>
            <Hamburger />
            <Links />
        </div>
    )
}

export default Navbar
