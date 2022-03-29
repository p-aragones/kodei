import React from "react";
import './SectionThree.scss';

import CustomButton from '../../CustomButton/CustomButton';

import { useTranslation } from "react-i18next";

const SectionThree = (props) => {
    const {t} = useTranslation();
    return (
        <div className="sectionThree">
            <div className="sectionThree-left">
                <h1 className="sectionThree-title">{props.title}</h1>
                <p className="sectionThree-body">{props.body}</p>
                <div className="sectionThree-buttons">
                    <CustomButton>{t('home.title')}</CustomButton>
                </div>
            </div>
            <img src={props.src} alt="" className="sectionThree-img"/>
        </div>
    );
}

export default SectionThree;