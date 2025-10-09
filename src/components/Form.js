

import React from 'react'
import Card from './Card'


const Form = () => {
  return (
    <Card>

        <form id='info-form1'>
        <input type='text' id='full_name' placeholder='Full name' /> <br />
         <input type='text' id='email' placeholder='Email'/> <br />
         <input type='password' id='password' placeholder='Password' /> <br />
         <input type='password' id='password_confirmation ' placeholder=" Password confirmation" /> <br />
         <button type='submit' > Submit </button>

        </form>
    </Card>
  )
}

export default Form
