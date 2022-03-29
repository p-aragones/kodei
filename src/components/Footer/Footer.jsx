import React from "react";
import './Footer.scss';

import logo from '../../assets/logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
    return (
        <div className="footer">
            <img src={logo} alt="logo" className="footer-logo"/>
            <div className="footer-socials">
                <a href="" target="_blank">
                    <FacebookIcon></FacebookIcon>
                </a>
                <a href="" target="_blank">
                    <InstagramIcon></InstagramIcon>
                </a>
                <a href="" target="_blank">
                    <TwitterIcon></TwitterIcon>
                </a>
                <a href="" target="_blank">
                    <LinkedInIcon></LinkedInIcon>
                </a>
            </div>
            <div className="footer-column">
                <h2 className="footer-title">{t('footer.column.1.title')}</h2>
                <ul className="footer-items">
                    <li className="footer-item">{t('footer.column.1.item.1')}</li>
                    <li className="footer-item">{t('footer.column.1.item.2')}</li>
                    <li className="footer-item">{t('footer.column.1.item.3')}</li>
                </ul>
            </div>
            <div className="footer-column">
                <h2 className="footer-title">{t('footer.column.2.title')}</h2>
                <ul className="footer-items">
                    <li className="footer-item">{t('footer.column.2.item.1')}</li>
                    <li className="footer-item">{t('footer.column.2.item.2')}</li>
                    <li className="footer-item">{t('footer.column.2.item.3')}</li>
                </ul>
            </div>
            <div className="footer-column">
                <h2 className="footer-title">{t('footer.column.3.title')}</h2>
                <ul className="footer-items">
                    <li className="footer-item">{t('footer.column.3.item.1')}</li>
                    <li className="footer-item">{t('footer.column.3.item.2')}</li>
                    <li className="footer-item">{t('footer.column.3.item.3')}</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;