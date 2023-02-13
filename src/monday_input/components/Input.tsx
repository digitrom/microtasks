import React, {ChangeEvent} from 'react';

export type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {
    const onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input
            value={props.title}
            onChange={onchangeInputHandler}
        />
    );
};

