

import React, { useRef } from 'react'
import Card from './Card';


const FormRef = () => {

    const FullNameRef = useRef();
    const EmailRef = useRef();
    const PasswordRef = useRef();
    const ConfirmationRef = useRef();

    const HandleSubmit = (e) =>{
        e.preventDefault();

        const formData = {
            full_name : FullNameRef.current.value,
            email : EmailRef.current.value,
            password : PasswordRef.current.value,
            ConfirmPassword : ConfirmationRef.current.value,

        }
        console.log("Form Data (useRef):", formData);
    }

  return (

     <Card>

        <form id='info-form2' onSubmit={HandleSubmit}>
        <input id='full_name1' ref={FullNameRef} placeholder='Full name' /> <br />
         <input  id='email1' ref={EmailRef} placeholder='Email'/> <br />
         <input  id='password1' ref={PasswordRef} type='password' placeholder='Password' /> <br />
         <input  id='password_confirmation1' type='password' ref={ConfirmationRef} placeholder=" Password confirmation" /> <br />
         <button type='submit' > Submit </button>

        </form>
    </Card>
  )
}

export default FormRef
