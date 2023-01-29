import React from 'react';
import '../App.css';

type ButtonPropsType ={
    name: string
    callBack: ()=> void
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;