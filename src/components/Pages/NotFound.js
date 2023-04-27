import React from "react";
import './NotFound.css';
import Button from '../Button';

export function NotFound() {
    return (
        <>
            <div className="not-found-container">
                <div className="content">
                    <p className="head-text"> 404 </p>
                    <p className="head-text"> Page Not Found </p>
                    <p className ="subtext"> Not all who wander are lost. </p>
                    <p className="subtext"> But right now seems like you are. </p>
                    <p className="subtext"> No worries, there's always home. </p>
                    <Button style="not-found"> Go to Home </Button>
                </div>
            </div>
        </>
  );
}
