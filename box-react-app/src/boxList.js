import React , {useState}from "react";
import NewBoxForm from "./new-box-form";
import Box from "./box";
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [{id: uuid(), width : 100, height : 100, backgroundColor : "black"},
        {  id: uuid(), width : 100, height : 100, backgroundColor : "green"},
        {  id: uuid(), width : 100, height : 100, backgroundColor : "red"}]

    const [list, setList] = useState(INITIAL_STATE)

    const addBox = (width, height, backgroundColor) => {
        console.log(list)
        setList(list => [...list, {id : uuid(), width, height, backgroundColor}])
    }

    const remove = (id)=>{
        setList(list.filter(l => l.id !== id))
    }
    // const delete

return (  
  <div>
    <h1>BoxList</h1>
    <NewBoxForm addBox = {addBox}/>
    <div>
        {list.map(({id, width, height, backgroundColor}) => < Box remove = {remove} id ={id} width = {width} height = {height} backgroundColor = {backgroundColor} key = {id} />)}
    </div>
    </div>
    )
}

export default BoxList