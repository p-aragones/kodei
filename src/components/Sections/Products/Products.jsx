import React, { useState } from "react";
import './Products.scss';

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ComputerIcon from '@mui/icons-material/Computer';
import { useTranslation } from "react-i18next";

const Products = () => {
    const [product, setProduct] = useState('');

    const onClickWeb = (e) => {
        setProduct("web");
    }
    const onClickMobile = (e) => {
        setProduct("mobile");
    }

    const {t} = useTranslation();
    return (
        <div className="products">
            <div className="products-buttons">
                <button
                    value="web"
                    className={"products-button " + (product === "web" ? "button-active" : "")}
                    onClick={onClickWeb}>
                    <ComputerIcon value="web" className="products-icon"></ComputerIcon>
                    <p className="products-button-text">{t('services.website').toUpperCase()}</p>
                </button>
                <button
                    value="mobile"
                    className={"products-button " + (product === "mobile" ? "button-active" : "")}
                    onClick={onClickMobile}>
                    <SmartphoneIcon className="products-icon"></SmartphoneIcon>
                    <p className="products-button-text">{t('services.mobile').toUpperCase()}</p>
                </button>
            </div>
            {product === "web" ?
                <div>
                    web
                </div>
                :
                <></>
            }
            {product === "mobile" ?
                <div>
                    mobile
                </div>
                :
                <></>
            }
        </div>
    );
}

export default Products;