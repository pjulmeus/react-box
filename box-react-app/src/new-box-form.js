import React, { useState } from "react";


const NewBoxForm = ({addBox}) => {
const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: ""
}

const [formData, setFormData] = useState(INITIAL_STATE)

const handleChange = e => {
const {name, value} = e.target;
 setFormData(data=>({
    ...data,
    [name] : value
 }))
}

const handleSubmit = (e) => {
    e.preventDefault()
    const {width, height, backgroundColor} = formData
    addBox(width, height, backgroundColor)
    // alert(`Created Box with width ${width}, height ${height}, Background Color ${backgroundColor}`)
    setFormData(INITIAL_STATE)
}
return (
<form onSubmit={handleSubmit}>
<label htmlFor="width">Width:</label>
<input id="width"
type="number" 
placeholder="Width"
name="width"
value={formData.width}
onChange={handleChange}
/>

<label htmlFor="height">Height:</label>
<input id="height"
type="number" 
placeholder="Height"
name="height"
value={formData.height}
onChange={handleChange}
/>

<label htmlFor="backgroundColor"> Background Color:</label>
<input id="backgroundColor"
type="text" 
placeholder="Background Color"
name="backgroundColor"
value={formData.backgroundColor}
onChange={handleChange}
/>

<button> Add Me</button>
</form>

)

}


export default NewBoxForm