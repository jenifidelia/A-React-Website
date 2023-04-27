import React from "react";
import './card.css';
import { Link } from 'react-router-dom';

function card({ children, tag, imagePath }) {

    const tagline = children;
    console.log(imagePath);

    return (
        <>
            <Link to="Services" className="no-link">
                <div className="box">
                    <div className="image-and-tag-container">
                        <img src={imagePath} width="100%" height= "auto" alt="Nature Sceneries"></img>
                        <p className="tag">{tag}</p>
                    </div>
                    <p className="tagline">{tagline}</p>
                </div>
            </Link>
        </>

    );
}

export default card;

