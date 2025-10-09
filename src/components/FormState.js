

import React, { useState } from 'react'
import Card from './Card'


const FormState = () => {

    const [formData, setFormData ] = useState({
        full_name : "",
        email : "",
        password : "",
        password_confirmation : "",
    });

    
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value});
    }
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("Form_Data:", formData)
    }

  return (
    <Card>
        <form id='info-form3' onSubmit={HandleSubmit}>
        <input id='full_name3' value={formData.full_name}  onChange={handleChange} placeholder='Full name' /> <br />
         <input  id='email3' value={formData.email} onChange={handleChange} placeholder='Email'/> <br />
         <input  id='password3' value={formData.password} onChange={handleChange} type='password' placeholder='Password' /> <br />
         <input  id='password_confirmation3' value={formData.password_confirmation} type='password' onChange={handleChange} placeholder=" Password confirmation" /> <br />
         <button type='submit' > Submit </button>

        </form>

    </Card>
    
  )
}

export default FormState
