import React from "react";
import {StudentType, topCarType} from "../App";

// type NewComponentPropsType = {
//     students: Array<StudentType>
// }
type NewComponent_1Type = {
    topCars: Array<topCarType>
}

// export const NewComponent = (props: NewComponentPropsType) => {
//     return (
//         <ul>
//             {props.students.map((oneObjectFromStudentArray, index) => {
//                 return (
//                     <li key={oneObjectFromStudentArray.id}>
//                         <span>{oneObjectFromStudentArray.name}</span>
//                         <span> age: {oneObjectFromStudentArray.age}</span>
//                     </li>
//                 )
//             })}
//         </ul>
//     )

export const NewComponent_1 = (props: NewComponent_1Type) => {
    return (
        <table>
            <tr>
                <th>N</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.topCars.map((carObjectFromTopCarsArray, index) => {
                debugger
                return (
                    <tr key={index}>
                        <td>{index+1} </td>
                        <td>{carObjectFromTopCarsArray.manufacturer}</td>
                        <td>{carObjectFromTopCarsArray.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}


