import React from 'react';
import { useState } from 'react';
import './Order.scss';
import { useTranslation } from 'react-i18next';
import ChooseLang from './Steps/ChooseLang/ChooseLang';
import Menu from './Steps/Menu/Menu';

const Order = () => {
    const {t} = useTranslation();
    const [step, setStepState] = useState(0)
    const [total, setTotal] = useState(0)

    const setStep = (value) => {
        setStepState(step + value)
    }

    return (
        <div className='order'>
            {step}
            {step === 0 ?
                <ChooseLang nextStep={(value) => setStep(value)} />
                :
                <></>
            }
            {step === 1 ?
                <Menu nextStep={(value) => setStep(value)} addTotal={(value) => setTotal(total + value)} total={total}/>
                :
                <></>
            }
        </div>
    );
}

export default Order;