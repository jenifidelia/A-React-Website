import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from "./Button.js";
import './Navbar.css';


function Navbar() {


    const [clicked, setClick] = useState(false);

    console.log(setClick);  //function dispatchSetState()

    function handleClick() {
        setClick(!clicked);        
    };

    function closeMobileMenu() {
        setClick(false);
    };

    const [showMenu, setMenu] = useState(false);        //this is to keep track of the state of the screen size below (see handleResize function)

    function handleResize(event) {
        //retrieve current window size
        let screenSize = window.innerWidth;

        //if window size is smaller than 1000 px, set showMenu to true
        if (screenSize < 1000) {
            setMenu(true);
        } else {
            setMenu(false);
        }

        //console.log(showMenu,screenSize);
    }

    window.addEventListener("resize", handleResize);

    //everytime before this component mount, check the screensize first (so that when user refresh, the screensize gets checked too)
    useEffect(
        () => {
            let screenSize2 = window.innerWidth;

            //if window size is smaller than 1000 px, set showMenu to true
            if (screenSize2 < 1000) {
                setMenu(true);
            } else {
                setMenu(false);
            }
        }
    , []);


    let condition = showMenu && clicked == false;

    //console.log(showMenu, clicked);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <div className="logo-and-menu-container">
                        <Link to="/" className="logo" onClick={closeMobileMenu}>
                        TRVL <i className="fa-brands fa-typo3"></i>
                        </Link>

                        <div>
                            {  showMenu &&
                               <div className="hamburger-menu">
                                  <i className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={handleClick}> </i>
                               </div>
                            
                            }
                        </div>
                    </div>

                    {!condition &&

                        <div className={clicked && showMenu ?"link-container-mobile":"link-container-web"}>

                            <li className="nav-container">
                                <ul>
                                    <Link className="navlink" to="/" onClick={closeMobileMenu}>Home</Link>
                                </ul>

                                <ul>
                                    <Link className="navlink" to="Services" onClick={closeMobileMenu}>Services</Link>
                                </ul>

                                <ul>
                                    <Link className="navlink" to="Products" onClick={closeMobileMenu}>Products</Link>
                                </ul>
                            </li>

                            <Link className="sign-up-button-container" to="SignUp" onClick={closeMobileMenu}>
                                <Button size="full" style="outline"> SIGN UP </Button>
                            </Link>

                        </div>
                    }

                </div>
            </nav>
        </>
    )

}

export default Navbar