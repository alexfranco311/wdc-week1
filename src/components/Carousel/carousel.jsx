import React from 'react'
import styled from 'styled-components'
import imgKayak from '../../images/Lanikai-Beach-Kayak-Rental.jpeg'
import imgTurtle from '../../images/turtleblog.jpeg'
import imgStay from '../../images/mokulua_islands_lanikai_beach_oahu_hawaii.jpeg'
import imgFishing from '../../images/8957873012_a59112747b_b.jpeg'
import imgStars from '../../images/Screen Shot 2021-10-31 at 10.13.58 PM.png'


const Car = styled.div`
    overflow: hidden;
    position: relative;

    .carousel-item {
        text-align: center;
        display: none;
        color: #26727E;
    }

    .carousel-item img {
        max-width: 80%;
        height: auto;
    }
    
    .carousel-item-hidden {
        display: none;
    }

    .carousel-item-visible {
        display: block;
        animation: fadeVisibility 1s;
    }

    .carousel-actions {
        display: flex;
        width: 100%;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .carousel-actions button {
        border-radius: 50px;
        border: 0;
        font-weight: bold;
        font-size: 4rem;
        background-color: transparent;
        cursor: pointer;
        color: aquamarine;
    }

    .carousel-actions button#carousel-button-prev{
        margin-left: 9%;
    }

    .carousel-actions button#carousel-button-next{
        margin-right: 9%;
    }
    
    @keyframes fadeVisibility {
        0% {
            opacity: .5;
        }
        100% {
            opacity: 1;
            transform: opacity linear;
        }
    }
`;

function Carousel() {
    let slidePosition = 0;
    const slides = document.getElementsByClassName('carousel-item');
    const totalSlides = slides.length;
    
    function updateSlidePosition(){
        for(let slide of slides) {
            slide.classList.remove('carousel-item-visible');
            slide.classList.add('carousel-item-hidden');
        };
    
        slides[slidePosition].classList.add('carousel-item-visible');
    };
    
    function moveToNextSlide(){
        if(slidePosition === totalSlides -1){
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    };
    
    function moveToPrevSlide(){
        if(slidePosition === 0){
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    };
    
    document.getElementById('carousel-button-next').addEventListener("click", function() {
        moveToNextSlide();
    });
    
    document.getElementById('carousel-button-prev').addEventListener("click", function() {
        moveToPrevSlide();
    });
    
    return (
        <Car className="carousel">
            <div className="carousel-item carousel-item-visible">
                <img src={imgKayak} alt="Kayak"/>
                <h2>Kayaking</h2>
            </div>
            <div className="carousel-item">
                <img src={imgTurtle} alt="Turtle"/>
                <h2>Snorkling with Turtles</h2>
            </div>
            <div className="carousel-item">
                <img src={imgStay} alt=""/>
                <h2>Rental Properties on the Beach</h2>
            </div>
            <div className="carousel-item">
                <img src={imgFishing} alt=""/>
                <h2>Night Fishing</h2>
            </div>
            <div className="carousel-item">
                <img src={imgStars} alt=""/>
                <h2>See the Milky Way sitting on the beach!</h2>
            </div>

            <div className="carousel-actions">
                <button id="carousel-button-prev" aria-label="Previous Slide">〈</button>
                <button id="carousel-button-next" aria-label="Next Slide">〉</button>
            </div>
        </Car>
    )
}

export default Carousel

