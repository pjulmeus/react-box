import React from "react"

const Box = ({id, width, height, backgroundColor, remove}) => {
//  const style = {
//     borderWidth : width, borderHeight : height, backgroundColor : backgroundColor 
//  }
return (

    <>
    <h2>box {id} </h2>
    <div style= {{width: Number(width), height: Number(height), backgroundColor: backgroundColor}}> 
    </div>
    <p onClick={() => remove(id)}>X</p>
    </>
    
)

}
// 
export default Box