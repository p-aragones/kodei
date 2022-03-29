import React from "react";
import './SectionOne.scss';

const SectionOne = (props) => {
    return (
        <div className="sectionOne">
            <h2 className="sectionOne-title">{props.title}</h2>
            <p className="sectionOne-body">{props.body}</p>
            <img className="sectionOne-img" src={props.src} alt="section-img" />
        </div>
    );
}

export default SectionOne;