import React from 'react';
import button from "../../monday_super-button/Button";


type ButtonProps = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};
