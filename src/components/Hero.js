import React, { useState, useEffect } from "react";
import './Hero.css';
import { Link } from 'react-router-dom';
import Button from './Button';

function Hero () {


    const [quote, setQuote] = useState("Do not go where the path may lead, go instead where there is no path and leave a trail.");
    const [author, setAuthor] = useState("Ralph Waldo Emerson");

    useEffect(() => {
        fetch("https://api.quotable.io/random?maxLength=150")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(
                (error) => console.log("error retrieving quote", error)
            );
    },[])

    return (
        <>

            <div className="hero-container">

                <video autoPlay loop muted src="/videos/video1.mp4">
                    Your browser does not support video
                </video>

                <div className="content-group">

                        <h2> ADVENTURES AWAIT.. WHAT ARE YOU WAITING FOR? </h2>

                        <p className="h3"> "{quote}" </p>

                        <p className="h4"> -{author} </p>

                        <div className="button-group">

                            <Link to="SignUp">
                                <Button style="outline" size="hero-button"> GET STARTED </Button>
                            </Link>

                            <a href="https://youtu.be/8zSlQHDjNnI">
                                <Button style="primary" size="hero-button">
                                    WATCH TRAILER <i class="fa-regular fa-circle-play"></i>
                                </Button>
                            </a>
                        </div>

                </div>

            </div>

        </>
    );
}

export default Hero;