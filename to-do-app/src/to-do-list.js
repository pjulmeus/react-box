import React, { useState } from "react";
import ToDoForm from "./to-do-form";
import ToDo from "./to-do";
import {v4 as uuid} from 'uuid';

const ToDoList = () => {
    const INITIAL_STATE = [{id: uuid(), text : "Get an oil change"},
        {  id: uuid(), text: "Let's go get ice cream"},
        {  id: uuid(), text : "Don't forget to live"}]

    const [list, setList] = useState(INITIAL_STATE);

    const addTodo = (text) => {
            setList(list => [...list, {id: uuid(), text} ])
        }

    const remove = (id)=>{
        setList(list.filter(l => l.id !== id))
    }

    return (  
     <>
          <h1>To-Do Form</h1>
          <ToDoForm addBox = {addTodo}/>
          <div>
              {list.map(({id, text}) => < ToDo id={id} key={id} text= {text} remove = {remove} />)}
          </div>
    </>
          )
}

export default ToDoList