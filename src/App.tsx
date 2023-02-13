import React, {useState} from 'react';
import {FullInput} from "./monday_input/components/FullInput";
import {Button} from "./monday_input/components/Button";
import {Input} from "./monday_input/components/Input";

export type MessageType = {
    message: string
}

const App = () => {

    let [message, setMessage] = useState<Array<MessageType>>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )
    let [title, setTitle] = useState<string>('')


    const addMessage = (title: string) => {
        let newMessage: MessageType = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input
                title={title}
                setTitle={setTitle}
            />
            <Button
                callBack={callBackButtonHandler}
                name={"+"}
            />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default App;