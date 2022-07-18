import React from 'react';
import './Menu.scss';
import { useTranslation } from 'react-i18next';
import Item from '../../../../components/Item/Item';

const Menu = (props) => {
    const {t} = useTranslation();
    return (
        <div className='menu'>
            <Item addTotal={props.addTotal} price={19.99}/>
            <Item addTotal={props.addTotal} price={9.99}/>
            <Item addTotal={props.addTotal} price={1}/>
            <Item addTotal={props.addTotal} price={1.20}/>
            <Item addTotal={props.addTotal} price={5.30}/>
            <h3 className='menu-total'>Total:</h3>
            <div className='menu-price'>
                    ${Math.round((props.total + Number.EPSILON) * 100) / 100}
            </div>
            <div className='menu-buttons'>
                <button className='menu-back' onClick={() => props.nextStep(-1)}>BACK</button>
                <button className='menu-next' onClick={() => props.nextStep(1)}>NEXT</button>
            </div>
        </div>
    );
}

export default Menu;