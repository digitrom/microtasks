import React from 'react';
import {FilterType, MoneyType} from "./App";

type NewComponentPropsType = {
    onClickFilterHandler: (filter:FilterType) => void
    currentMoney: Array<MoneyType>
}

const NewComponent = (props:NewComponentPropsType) => {
    debugger
    return (
        <div>
            <ul>
                {props.currentMoney.map((objectFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span> {objectFromMoneyArray.banknote}</span>
                            <span> {objectFromMoneyArray.nominal}</span>
                            <span> {objectFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </div>
    );
};

export default NewComponent;