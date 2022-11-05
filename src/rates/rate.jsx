import { useState } from 'react';
import "./rate.css"



export default function Rate(props) {

    const { color, isSelect, onSetSelect } = props;


    let rateSelected = 'rate';

    if (isSelect) {
        rateSelected = 'selected';
    }

    function onClick() {
        onSetSelect(color);
    }

    return (

        <div className={rateSelected} onClick={onClick}>
            <div className="cardName">Безлимитный {props.price}</div>
            <div className="cardPrice">{props.price} руб/мес</div>
            <div className="cardSpeed">{props.speed}</div>
            <div className="cardText">Объем включенного трафика не ограничен</div>
        </div >
    );
}


