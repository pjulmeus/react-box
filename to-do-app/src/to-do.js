import React from "react"

const ToDo = ({id, text, remove}) =>{

return (
    <>
    <h2>box {id} </h2>
    <p> {text}</p>
    <p onClick={() => remove(id)}>X</p>
    </>
)

}

export default ToDo