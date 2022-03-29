import React from 'react';
import './About.scss';

import { useTranslation } from 'react-i18next';

import Pricing from '../../components/Sections/Pricing/Pricing';

const About = () => {
    const {t} = useTranslation();
    return (
        <div className='about'>
            <h1 className='about-title'>
                {t('about.title')}
            </h1>
            <h2>{t('pricing.design')}</h2>
            <Pricing></Pricing>
        </div>
    );
}

export default About;