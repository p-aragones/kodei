import React from 'react';
import './ChooseLang.scss';
import LangCard from '../../../../components/LangCard/LangCard';
import { useTranslation } from 'react-i18next';

const ChooseLang = (props) => {
    const {t} = useTranslation();
    return (
        <div className='chooselang'>
            <h1 className='chooselang-title'>
                {t('order.lang')}
            </h1>
            <LangCard code="GB" lang="English" value="en" nextStep={props.nextStep} />
            <LangCard code="ES" lang="Español" value="es" nextStep={props.nextStep} />
            <LangCard code="CAT" lang="Català" value="cat" nextStep={props.nextStep} />
        </div>
    );
}

export default ChooseLang;