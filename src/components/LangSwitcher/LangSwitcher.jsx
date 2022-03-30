import i18next from 'i18next';
import React from 'react';

import './LangSwitcher.scss';

const LangSwitcher = () => {

    const onChange = (event) => {
        i18next.changeLanguage(event.target.value);
    };

    return (
        <select defaultValue={i18next.language} name="langswitcher" id="langswitcher" className='LangSwitcher' onChange={onChange}>
            <option className="option" value="cat">Català</option>
            <option className="option" value="es">Español</option>
            <option className="option" value="en">English</option>
        </select>
    );
}

export default LangSwitcher;