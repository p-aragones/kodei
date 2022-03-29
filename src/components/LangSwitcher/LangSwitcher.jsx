import i18next from 'i18next';
import React from 'react';

import './LangSwitcher.scss';

const LangSwitcher = () => {

    const onChange = (event) => {
        i18next.changeLanguage(event.target.value);
    };

    return (
        <select name="langswitcher" id="langswitcher" className='LangSwitcher' onChange={onChange}>
            { i18next.language === "cat" ? 
                <option selected className="option" value="cat">Català</option>
                :
                <option className="option" value="cat">Català</option>
            }
            { i18next.language === "es" ? 
                <option selected className="option" value="es">Español</option>
                :
                <option className="option" value="es">Español</option>
            }
            { i18next.language === "en" ? 
                <option selected className="option" value="en">English</option>
                :
                <option className="option" value="en">English</option>
            }
        </select>
    );
}

export default LangSwitcher;