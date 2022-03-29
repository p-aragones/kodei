import React from "react";
import './CustomButton.scss';

const CustomButton = (props) => {
    return (
        <button className="customButton" type="button">{props.children}</button>
    );
}

export default CustomButton;