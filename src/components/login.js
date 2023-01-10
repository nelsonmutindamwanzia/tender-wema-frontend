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
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       
        <div className='hidden sm:block'>
        {/* <ImageBackground  source={backgrnd} style={{height: 50,width: 50}}> */}
          <img className='w-full h-full object-cover' src={loginImg} alt='Seems like the cover is late to the party' />
        {/* </ImageBackground> */}
        </div>
      

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
  )
}















