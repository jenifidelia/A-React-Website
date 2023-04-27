import React from "react";
import './cards.css'
import Card from './card';

function cards() {
    return (
        <>
            <p className="destination-text"> Check out these EPIC Destinations! </p>

            <div className="main-cards-container">

                <div className="flexbox-one">

                    <div className="card-container">
                        <Card tag="Adventure" imagePath="images/img-9.jpg">
                            Explore the hidden waterfall deep inside the Amazon Jungle
                        </Card>
                    </div>

                    <div className="card-container">
                        <Card tag="Luxury" imagePath="images/img-2.jpg">
                            Travel through the Islands of Bali in a Private Cruise
                        </Card>
                    </div>

                </div>

                <div className="flexbox-two">

                    <div className="card-container">
                        <Card tag="Mystery" imagePath="images/img-3.jpg">
                            Set Sail in the Atlantic Ocean visiting Uncharted Waters
                        </Card>
                    </div>

                    <div className="card-container">
                        <Card tag="Adventure" imagePath="images/img-4.jpg">
                            Experience Football on Top of the Himalayan Mountains
                        </Card>
                    </div>

                    <div className="card-container">
                        <Card tag="Adrenaline" imagePath="images/img-8.jpg">
                            Ride through the Sahara Desert on a guided camel tour
                        </Card>
                    </div>

                </div>
            </div>
        </>
    );

}

export default cards;