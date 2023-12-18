import React, { useState } from "react";


const ToDoForm = ({addTodo}) =>{
const INITIAL_STATE = {
 text: ""
}

// const addTodo = ({text}) => {
//     setFormData([...form])
// }

const [formData, setFormData] = useState(INITIAL_STATE)

const handleChange = (e) => {
 const {name, value} = e.target
 setFormData(data => ({
    ...data,
    [name]:value
 }))
}
 const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(...formData);
    setFormData(INITIAL_STATE);
  };

return (
    <>
<form onSubmit={handleSubmit}>
<label htmlFor="text"> Text : </label>
<input id="text"
type="text" 
placeholder="Text"
name="text"
value={formData.text}
onChange={handleChange}
/>
 </form>
 </>
 )

}


export default ToDoForm