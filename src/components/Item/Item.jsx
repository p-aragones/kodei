import React from 'react';
import './Item.scss';
import sample from '../../assets/sample.jpg';
import { useTranslation } from 'react-i18next';
import Quantity from '../Quantity/Quantity';

const Item = (props) => {
    const {t} = useTranslation();
    return (
        <div className='item'>
            <img className="item-picture" src={sample} alt="" />
            <div className="item-description">
                <h4 className='item-description-name'>Item</h4>
                <div className='item-description-price'>
                    $
                    <p>
                        {props.price}
                    </p>
                </div>
            </div>
            <Quantity addTotal={props.addTotal} price={props.price}/>
        </div>
    );
}

export default Item;