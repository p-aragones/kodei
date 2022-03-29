import React from "react";
import './SectionTwo.scss';

const SectionTwo = (props) => {
    return (
        <div className="sectionTwo">
            <div className="sectionTwo-row">
                <img className="sectionTwo-img" src={props.src} alt="section-img" />
                <div>
                    <h2 className="sectionTwo-title">{props.title}</h2>
                    <p className="sectionTwo-body">{props.body}</p>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;