import React from "react";
import './Hero.scss';

import { Trans } from "react-i18next";
import CustomButton from "../../CustomButton/CustomButton";

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 className="hero-title"><Trans>{props.title}</Trans></h1>
                <h3 className="hero-subtitle"><Trans>{props.subtitle}</Trans></h3>
                <p className="hero-body"><Trans>{props.body}</Trans></p>
                <CustomButton><Trans>{(props.cta).toUpperCase()}</Trans></CustomButton>
            </div>
            <img className="hero-img" src={props.src} alt="hero-section" />
        </div>
    );
}

export default Hero;