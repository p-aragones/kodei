import React from 'react';
import './LangCard.scss';
import catalunya from '../../assets/catalunya.svg';
import ReactCountryFlag from 'react-country-flag';
import i18next from 'i18next';

const LangCard = (props) => {
    const handleClick = props => () => {
        i18next.changeLanguage(props.value);
        props.nextStep(1)
    };    
    return (
        <button type='button' className='langcard' onClick={handleClick(props)}>
            {props.code === "CAT" ?
                <img className="cat" src={catalunya} alt="catalunya" />
                :
                <ReactCountryFlag
                countryCode={props.code}
                svg
                style={{
                    width: '5em',
                    height: '5em',
                    marginRight: '3em',
                }}
                title={props.code}
                />
            }
            <h3>
                {props.lang}
            </h3>
        </button>
    );
}

export default LangCard;