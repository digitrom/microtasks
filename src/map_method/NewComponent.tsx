import React from "react";
import {StudentType} from "../App";

type NewComponentPropsType = {
    students: Array<StudentType>
}


export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.students.map((oneObjectFromStudentArray, index) => {
                return (
                    <li key={oneObjectFromStudentArray.id}>
                        <span>{oneObjectFromStudentArray.name}</span>
                        <span> age: {oneObjectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}


