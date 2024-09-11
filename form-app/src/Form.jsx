import { useState } from "react";

export default function Form(){
    let[formData, setFormData] = useState({
        fullName: "",
        userName: ""
    });

    let handleInputChange = (event) =>{
        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value}
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: ""
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" 
            placeholder="Full Name" 
            name="fullName" 
            id="fullName" 
            onChange={handleInputChange} 
            value={formData.fullName}/>

            <label htmlFor="userName">User Name</label>
            <input type="text" 
            placeholder="User Name" 
            name="userName" 
            id="userName" 
            onChange={handleInputChange} 
            value={formData.userName}/>

            <button>Submit</button>
        </form>
    )
}