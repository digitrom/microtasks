import React, {useState} from 'react';
import './App.css';

type FilterType = 'all' | 'ruble' | 'dollar'

function App() {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((f) => f.banknote === 'ruble');
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((f) => f.banknote === 'dollar');
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
      setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objectFromMoneyArray, index) => {
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
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>

        </>
    );
}

export default App;
