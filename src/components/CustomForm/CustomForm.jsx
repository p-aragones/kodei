import React from 'react';
import './CustomForm.scss';

import CustomInput from '../CustomInput/CustomInput';

import { useTranslation } from 'react-i18next';

const CustomForm = () => {
    function sendEmail(e) {

    }
    const {t} = useTranslation();
    return (
        <form onSubmit={sendEmail} className="customForm">
            <CustomInput placeholder={t('contact.name')} name="name"></CustomInput>
            <CustomInput placeholder={t('contact.email')} name="email"></CustomInput>
            <textarea className='customForm-message' rows="5" cols="40" name="text" placeholder={t('contact.message')}></textarea>
            <input className='customForm-submit' type="submit" value={t('contact.submit')}/>
        </form>
    );
}

export default CustomForm;