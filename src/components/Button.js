import React from "react";
import './Button.scss';

const Button = ({onClick, children}) => {

    const handleClick = e => {
        e.preventDefault();

        onClick(e);
    };

    return (
        <button className="button" onClick={handleClick}>{children}</button>
    );
};

export default Button;