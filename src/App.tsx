import React, {useState} from 'react';
import {FullInput} from "./monday_input/components/FullInput";

export type MessageType = {
    message: string
}

const App = () => {

    let [message, setMessage] = useState<Array<MessageType>>([
            {message: 'message1' },
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage: MessageType = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div className={'App'}>
            <FullInput
                addMessage={addMessage}
            />
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default App;