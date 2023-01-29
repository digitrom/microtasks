import React, {useState} from 'react';
import './App.css';
import Button from "./monday_super-button/Button";


function App() {
  // const func1 = (name:string, age: number) => {
  //   console.log(name, age)
  // }

  let [a, setA] = useState(0)

  const onClickHandler_1 = () => {
      setA(++a)
      console.log(a)
  }

    const onClickHandler_2 = () => {
        setA(0)
        console.log(a)
    }

  return (
      <div className="App">
        {/*<Button name={"Roman"} callBack={() => func1("Roman", 37)}/>*/}
        <button onClick={onClickHandler_1}>{a}</button>
        <button onClick={onClickHandler_2}>{"reset"}</button>
      </div>
  );
}

export default App;
