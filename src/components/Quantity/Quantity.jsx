import React, { useState } from 'react';
import './Quantity.scss';
import { useTranslation } from 'react-i18next';

const Quantity = (props) => {
    const {t} = useTranslation();
    const [amount, updateAmount] = useState(0);

    const decreaseAmount = (props) => {
        if (amount > 0) {
            updateAmount(amount - 1)
            props.addTotal(-props.price)
        }
    }

    const increaseAmount = (props) => {
        updateAmount(amount + 1)
        props.addTotal(props.price)
    }

    return (
        <div className='quantity'>
            <button className='quantity-decrease' onClick={() => decreaseAmount(props)}>-</button>
            <h3 className='quantity-text'>{amount}</h3>
            <button className='quantity-add' onClick={() => increaseAmount(props)}>+</button>
        </div>
    );
}

export default Quantity;