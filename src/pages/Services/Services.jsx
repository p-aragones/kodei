import React from "react";
import { useTranslation } from "react-i18next";
import './Services.scss';

import Pricing from '../../components/Sections/Pricing/Pricing';
import Products from "../../components/Sections/Products/Products";
import CustomSwitch from "../../components/CustomSwitch/CustomSwitch";

const Services = () => {
    const {t} = useTranslation();
    return (
        <div className="services">
            <Products></Products>
            <h2>{t('pricing.design')}</h2>
            <Pricing></Pricing>
            <div className="services-extras">
                <div className="services-extra">
                    <h4>e-commerce</h4>
                    <CustomSwitch></CustomSwitch>
                </div>
                <div className="services-extra">
                    <h4>contact form</h4>
                    <CustomSwitch></CustomSwitch>
                </div>
                <div className="services-extra">
                    <h4>login & profiles</h4>
                    <CustomSwitch></CustomSwitch>
                </div>
                <div className="services-extra">
                    <h4>tracking & analytics</h4>
                    <CustomSwitch></CustomSwitch>
                </div>
            </div>
        </div>
    );
}

export default Services;