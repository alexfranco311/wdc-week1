import React from 'react'
import styled from 'styled-components'

const Feature = styled.div`
    width: 700px;
    height: 700px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;

    h1 {
        color: blue;
    }
    
`;

function Body() {
    return (
        <Feature>
            <h1>Join us for some Fun under the Sun</h1>
            
        </Feature>
    )
}

export default Body
