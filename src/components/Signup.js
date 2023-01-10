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
    
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt='Seems like the cover is late to the party' />
      </div>

      <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full m-auto bg-white p-4' onSubmit={handleValidation}>
          <h2 className='text-4xl font-bold text-center py-6'>Welcome!</h2>

          <h3 className='text-1xl font-sans hover:font-serif text-center py-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
          <div className='flex flex-col py-2'>
            
            <input className='border p-2' type="text" placeholder="Email"
              name="email" onChange={handleInput} />

              {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Email"></input> */}
          </div>

          <div className='flex flex-col py-2'>
            {/* <label>Password</label> */}
            <input className='border p-2' type="password" placeholder="Password" 
              name="password" onChange={handleInput}/>
              {/* {errors.password && <p style={{color: "red"}}>{errors.password}</p>} */}
          </div>


          <div className='flex flex-col py-2'>
            {/* <label>Confirm password</label> */}
            <input className='border p-2' type="password" placeholder="confirm password"
              name="confirm_password" onChange={handleInput} />
              {errors.confirm_password && <p style={{color: "red"}}>{errors.confirm_password}</p>}
          </div>

          <div className='flex flex-col py-2'>
            {/* <label>Company Name</label> */}
            <input className='border p-2' type="text"placeholder="company name" />
          </div>

          <div className='flex flex-col py-2'>
            {/* <label>Company Telephone</label> */}
            <input className='border p-2' type="text" placeholder='Company Telephone' />
          </div>

          <div className='flex flex-col py-2'>
            {/* <label>Company Address</label> */}
            <input className='border p-2' type="text" placeholder='Company Adress' />
          </div>
          
          <div className='flex justify-between'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
            <p>Recover password</p>
          </div>
          <button className='border w-full my-5 py-2 bg-blue-500 hover:bg-blue-400 text-white'>Sign up</button>
        </form>
      </div>
      
    </div>
  )
}













