import React, { useState} from 'react'

import loginImg from '../assets/draw2.svg'
import validation from './Validation'
// if(String(values.confirm_password) !== "" || values.confirm_password !== values.password) {
    //     error.confirm_password = "Password did not match"
    // }


export default function Signup() {

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    setValues({...values, [e.target.name]: [e.target.value]})
  }

  function handleValidation(e) {
    e.preventDefault()
    setErrors(validation(values))
  }
  return (
    
    <h1>sign up page</h1>
  )
}













