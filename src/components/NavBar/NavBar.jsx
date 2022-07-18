import React, { useState } from 'react';
import './NavBar.scss';

import logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import CustomLink from '../CustomLink/CustomLink';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const NavBar = () => {
  const {t} = useTranslation();
  
  const [isSticky, setSticky] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={isSticky ? 'NavBar active' : 'NavBar'}>
      <Link to="/">
        <img src={logo} alt="a4km-logo" className='logo'/>
      </Link>
        <div className='pages'>
          <CustomLink link="/">{t('navbar.pages.home')}</CustomLink>
          <CustomLink link="/services">{t('navbar.pages.services')}</CustomLink>
          <CustomLink link="/contact">{t('navbar.pages.contact')}</CustomLink>
          <CustomLink link="/about">{t('navbar.pages.about')}</CustomLink>
          <CustomLink link="/order">{t('navbar.pages.order')}</CustomLink>
        </div>
        <LangSwitcher/>
    </nav>
  );
};
export default NavBar;