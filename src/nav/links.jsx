import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
.links {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
}

.links li {
    font-size: 22px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: -1px;
    padding: 25px 5px;
}

.links a{
    border: 1px solid #479AD1;
    border-radius: 5%;
    padding: 12px;
}

.links a:hover {
    background-color: #479AD1;
    color: #EFF8F3;
    transition-duration: .5s;
}

@media screen and (max-width: 768px) {
    .links {
        display: none;
        flex-flow: column nowrap;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 250px;
        padding-top: 4.5rem;
        align-items: left;
    }
}   
`;

function Links() {
    return (
        <Ul className="links">
            <li><a href="/">Location</a></li>
            <li><a href="/">Attractions</a></li>
            <li><a href="/">Reviews</a></li>
        </Ul>   
    )
}

export default Links
