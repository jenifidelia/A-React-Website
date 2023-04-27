import React from 'react';
import './Button.css';

const Button = ({children,style,size}) => {

    return (
        <button className={`${style} ${size}`}>
            {children}
        </button>
    );
}


export default Button;