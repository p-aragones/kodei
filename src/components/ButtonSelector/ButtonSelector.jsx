import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './ButtonSelector.scss';

const ButtonSelector = () => {
  const {t} = useTranslation();
  const [selected, setSelected] = useState('');

  const onClick = (e) => {
    setSelected(e.target.value);
  }

  return (
    <div className="ButtonSelector">
      <div className="buttonGroup">
        <div className="selector-input">
          <input onClick={onClick} value="500" name="pricing" type="radio" className="radio__input" id="myRadio1"/>
          <label htmlFor="myRadio1" className="radio__label">{t('pricing.simple')}</label>  
        </div>
        <div className="selector-input">
          <input onClick={onClick} value="750" name="pricing" type="radio" className="radio__input" id="myRadio2"/>
          <label htmlFor="myRadio2" className="radio__label">{t('pricing.standard')}</label>
        </div>
        <div className="selector-input">
          <input onClick={onClick} value="1000" name="pricing" type="radio" className="radio__input" id="myRadio3"/>
          <label htmlFor="myRadio3" className="radio__label">{t('pricing.custom')}</label>
        </div>
      </div>
      <div className="selectorResult">
        {selected === "500" ?
          <div>
            <h1 className="selectorResult-pricetag">500€</h1>
            <p>{t('pricing.simple_desc')}</p>
          </div>
          :
          <></>
        }
        {selected === "750" ?
          <div>
            <h1 className="selectorResult-pricetag">750€</h1>
            <p>{t('pricing.standard_desc')}</p>
          </div>
          :
          <></>
        }
        {selected === "1000" ?
          <div>
            <h1 className="selectorResult-pricetag">1000€</h1>
            <p>{t('pricing.custom_desc')}</p>
          </div>
          :
          <></>
        }
      </div>
    </div>
  );
}

export default ButtonSelector;