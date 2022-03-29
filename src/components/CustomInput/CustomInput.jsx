import React from "react";
import './CustomInput.scss';

const CustomInput = (props) => {
    return (
        <input className="customInput" type="text" placeholder={props.placeholder} name={props.name} style={{height: props.height}}/>
    );
}

export default CustomInput;