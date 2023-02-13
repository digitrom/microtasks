import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "../../App";

export type FullInputTPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputTPropsType) => {
   let [title, setTitle] = useState<string>("")
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onClickButtonHandler = () => {
       props.addMessage(title);
        setTitle('')
    }
    return (
        <div>
            <input
                value={title}
                onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
