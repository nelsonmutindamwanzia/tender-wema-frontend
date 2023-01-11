import React, { useState} from 'react'

import loginImg from '../assets/Vector.png'
// import backgrnd from '../assets/rec6.jpg'
import validation from './Validation'




export default function Login() {
  

  const [email, SetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.includes('@')) {
      setError('This is an invalid email adress')
      return;
    }
  }

  return (

    <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1Example13">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1Example23">Password</label>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#3b5998'}} href="#!" role="button">
                  <i className="fab fa-facebook-f me-2" />Continue with Facebook
                </a>
                <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#55acee'}} href="#!" role="button">
                  <i className="fab fa-twitter me-2" />Continue with Twitter</a>
              </form>
            </div>
          </div>
        </div>
      </section>
    // <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       
    //     <div className='hidden sm:block'>
    //     {/* <ImageBackground  source={backgrnd} style={{height: 50,width: 50}}> */}
    //       <img className='w-full h-full object-cover' src={loginImg} alt='Seems like the cover is late to the party' />
    //     {/* </ImageBackground> */}
    //     </div>
      

    //   <div className='bg-gray-100 flex flex-col justify-center'>
    //     <form className='max-w-[400px] w-full m-auto bg-white p-4' onSubmit={handleSubmit}>
    //       <h2 className='text-4xl font-bold text-center py-6'>Hello Again!</h2>
    //       <div className='flex flex-col py-2'>
    //         <label>Email</label>
    //         <input className='border p-2' type="text" 
    //         value={email}
    //         onChange={(event) => SetEmail(event.target.value)}/>
    //       </div>

    //       <div className='flex flex-col py-2'>
    //         <label>Password</label>
    //         <input className='border p-2' type="password"
    //         value={password} 
    //         onChange={(event) => setPassword(event.target.value)} />

    //         {error && <p style={{ color: 'red' }}>{error}</p>}
    //       </div>

          
          
    //       <div className='flex justify-between'>
    //         <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
    //         <p>Recover password</p>
    //       </div>
    //       <button className='border w-full my-5 py-2 bg-blue-500 hover:bg-blue-400 text-white'>Login</button>
    //     </form>
    //   </div>
      
    // </div>
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













