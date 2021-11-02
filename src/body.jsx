import React from 'react'
import styled from 'styled-components'
import FeatureBackground from './images/ryan-pernofski-weuZKB19ZeU-unsplash.jpg'
import Carousel from './components/Carousel/carousel';

const Feature = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    background-color: #EFF8F3;
    margin-top: -18px;
    
    .featureContainer {
        width: 80%;
        height: 100%;
        background-image: url(${FeatureBackground});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    h1 {
        color: #26727E;
        font-size: 2.5rem;
        padding-bottom: 2.5rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        letter-spacing: -1px;
        font-style: italic;
    }
    
    @media screen and (max-width: 768px){
        .featureContainer {
            max-width: 700px;
            max-height: 500px;
        }
    }
`;

const Attractions = styled.div`
    background-color: #EFF8F3;
    width: 100%;
    text-align: center;
    color: #26727E;
    
`;

const Reviews = styled.div`

`;

function Body() {
    return (
        <>
        <Feature>
            <section className="featureContainer">
                <h1>Join us for some Fun under the Sun</h1>
            </section>
        </Feature>
        <Attractions>
            <br/>
            <h1>Come see why we are the premier destination for coders everywhere</h1>
            <Carousel />
        </Attractions>
        <Reviews>

        </Reviews>
        </>
    )
}

export default Body
