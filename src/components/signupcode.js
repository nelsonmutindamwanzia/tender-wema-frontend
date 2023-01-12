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


//Login code 
<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       
       {/* <div className='hidden sm:block'> */}
       {/* <ImageBackground  source={backgrnd} style={{height: 50,width: 50}}> */}
         {/* <img className='w-full h-full object-cover' src={loginImg} alt='Seems like the cover is late to the party' /> */}
       {/* </ImageBackground> */}
       {/* </div> */}
       {/* Commented from line 29-33 */}
     

     <div className='bg-gray-100 flex flex-col justify-center'>
       <form className='max-w-[400px] w-full m-auto bg-white p-4' onSubmit={handleSubmit}>
         <h2 className='text-4xl font-bold text-center py-6'>Hello Again!</h2>
         <div className='flex flex-col py-2'>
           <label>Email</label>
           <input className='border p-2' type="text" 
           value={email}
           onChange={(event) => SetEmail(event.target.value)}/>
         </div>

         <div className='flex flex-col py-2'>
           <label>Password</label>
           <input className='border p-2' type="password"
           value={password} 
           onChange={(event) => setPassword(event.target.value)} />

           {error && <p style={{ color: 'red' }}>{error}</p>}
         </div>

         
         
         <div className='flex justify-between'>
           <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
           <p>Recover password</p>
         </div>
         <button className='border w-full my-5 py-2 bg-blue-500 hover:bg-blue-400 text-white'>Login</button>
       </form>
     </div>
     
   </div>


//Code from the login.js file 
import React, { useState} from 'react'
// import './validation.css'

import loginImg from '../assets/Vector.png'
// import backgrnd from '../assets/rec6.jpg'
// import validation from './Validation'



export default function Login() {
  

  const [email, SetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  //User login info
  // const database = [
  //   {
  //     email: "user1",
  //     password: 'pass'
  //   }
    
  // ]

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault()

    if (!email.includes('@')) {
      setError('This is an invalid email adress')
      return;
    }
  }

  //var { usermail, pass } = document.forms[0]

  //Find user login info
  // const userData = database.find((user)=> user.email === usermail.value)

  // //Compare user info
  // if (userData) {
  //   if (userData.pass !== pass.value) {
  //     //Invalid password
  //     //setError({ email: })
  //   }
  // }

  return (
    <h3>gfgff</h3>
  )
}

// This form has three variables: email, password and error. The email and password 
//state variables are used to store the user input and the error state variable is used to store
// any error messages that should be displayed to the user

// The form has an onSubmit handler called handlesubmit which is called when the user submits the form

//The handesubmit function first prevents the default form submission behavour, then checks if the email state variable includes an @ character.
// If it does not, it sets the error state variable to an error message and returns early. If the email is valid,
//it can perforn the login logic

// The form also has two input fileds, one for the email and one for the password, and each
// input field has an onchange handler handler that updates the corresponding state
//variable when the user types in the input. Finally, the form displays
//the error message, if one exixts, and a login button.


//Code for the right side 

























