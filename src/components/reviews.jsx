import React from 'react'
import styled from 'styled-components'

const Rev = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    flex-direction: column;

    .content {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .card {
        background: linear-gradient(to right bottom,rgba(101, 223, 201, 0.1),rgba(108, 219, 235, 0.4));
        backdrop-filter: blur(2rem);
        width: 250px;
        height: 325px;
        padding: 3px;
        border-radius: 1.5rem;
        display: flex;
        flex-flow: column wrap;
        font-size: 1.5rem;
        color: #26727E;
        border: 1px solid white;
    }

    .card h3{
        margin: 10% auto;
    }

    .card p {
        margin: 10% 5px;
    }

    @media screen and (max-width:768px){
        flex-direction: column;

        .content {
            flex-direction: column;
            align-items: center;
        }
    }
`;


function Reviews() {
    return (
        <Rev>
            <div className="content">
                <div className="card">
                    <h3>John Doe</h3>
                    <p><em>Review:</em><br/>This place is a dream come true.</p>
                </div>
                <div className="card">
                    <h3>Seymour Butts</h3>
                    <p><em>Review:</em><br/>Our Stay was amazing.</p>
                </div>
                <div className="card">
                    <h3>Meg O. Watt</h3>
                    <p><em>Review:</em><br/>A night under the start that i'll never forget.</p>
                </div>
            </div>
            <div className="content">
                <div className="card">
                    <h3>Justin Case</h3>
                    <p><em>Review:</em><br/>A boys trip to do some night fishing was well needed.</p>
                </div>
                <div className="card">
                    <h3>McLovin</h3>
                    <p><em>Review:</em><br/>I'm just here for the turtles.</p>
                </div>
            </div>
        </Rev>
    )
}

export default Reviews
