import React from 'react';
import './Home.scss';

import SectionOne from '../../components/Sections/SectionOne/SectionOne';

import { useTranslation } from 'react-i18next';

import logo from '../../assets/logo.svg';
import SectionTwo from '../../components/Sections/SectionTwo/SectionTwo';
import Hero from '../../components/Sections/Hero/Hero';
import CTA from '../../components/CTA/CTA';
import CustomButton from '../../components/CustomButton/CustomButton';
import SectionThree from '../../components/Sections/SectionThree/SectionThree';
import { Link } from 'react-router-dom';

const Home = () => {
    const {t} = useTranslation();
    return (
        <div className='home'>
            <Hero title={t('kodei').toUpperCase()} src={logo} subtitle={t('home.hero.subtitle')} body={t('home.hero.body')} cta={t('home.hero.cta')} />
            <CTA title={t('home.services.title').toUpperCase()} body={t('home.services.body')}>
                <Link to="/services">
                    <CustomButton>{t('home.services.button').toUpperCase()}</CustomButton>
                </Link>
            </CTA>
            <SectionOne title={t('home.title')} src={logo} body={t('lorem')}/>
            <SectionThree title={t('home.title')} src={logo} body={t('lorem')}/>
            <SectionTwo title={t('home.title')} src={logo} body={t('lorem')}/>
        </div>
    );
}

export default Home;