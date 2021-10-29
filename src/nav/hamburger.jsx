import React from 'react';

// style 
// .burger {
//     width: 2rem;
//     height: 2rem;
//     position: fixed;
//     top: 15px;
//     right: 20px;
//     display: flex;
//     justify-content: space-around;
//     flex-flow: column nowrap;
// }

// .section {
//     width: 2rem;
//     height: 0.25rem;
//     background-color: #26727E;
// }

function Hamburger() {
    return (
        <div className="burger">
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
        </div>
    )
}

export default Hamburger