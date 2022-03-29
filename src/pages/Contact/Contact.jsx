import React from 'react';
import './Contact.scss';

import { useTranslation } from 'react-i18next';

import CustomForm from '../../components/CustomForm/CustomForm';

const Contact = () => {
    const {t} = useTranslation();
    return (
        <div className='contact'>
            <h1 className='contact-title'>
                {t('contact.title')}
            </h1>
            <CustomForm></CustomForm>
        </div>
    );
}

export default Contact;