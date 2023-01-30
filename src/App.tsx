import React, {useState} from 'react';
import './App.css';
import Button from "./monday_super-button/Button";
import {NewComponent} from "./map_method/NewComponent";

export type StudentType = {
    id: number
    name: string
    age: number
}


function App() {

    const students: Array<StudentType>  = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]



  // const func1 = (name:string, age: number) => {
  //   console.log(name, age)
  // }

  // let [a, setA] = useState(0)
  //
  // const onClickHandler_1 = () => {
  //     setA(++a)
  //     console.log(a)
  // }
  //
  //   const onClickHandler_2 = () => {
  //       setA(0)
  //       console.log(a)
  //   }

  return (
      <div className="App">
        {/*<Button name={"Roman"} callBack={() => func1("Roman", 37)}/>*/}
        {/*<button onClick={onClickHandler_1}>{a}</button>*/}
        {/*<button onClick={onClickHandler_2}>{"reset"}</button>*/}
          <NewComponent students={students}/>

      </div>
  );
}

export default App;
