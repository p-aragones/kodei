import React from "react";
import { Trans } from "react-i18next";
import './CTA.scss';

const CTA = (props) => {
    return (
        <div className="cta">
            <h3 className="cta-title"><Trans>{props.title}</Trans></h3>
            <p className="cta-body"><Trans>{props.body}</Trans></p>
            <div>{props.children}</div>
        </div>
    );
}

export default CTA;