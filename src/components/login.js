import React, { useState} from 'react'

import loginImg from '../assets/Vector.png'
// import backgrnd from '../assets/rec6.jpg'

export default function Login() {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const checkEmail = () =>{
    alert('test')
  }
  const [values, setValues] = useState({
    Email: '',
    Password: ''
  })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       
        <div className='hidden sm:block'>
        {/* <ImageBackground  source={backgrnd} style={{height: 50,width: 50}}> */}
          <img className='w-full h-full object-cover' src={loginImg} alt='Seems like the cover is late to the party' />
        {/* </ImageBackground> */}
        </div>
      

      <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full m-auto bg-white p-4'>
          <h2 className='text-4xl font-bold text-center py-6'>Hello Again!</h2>
          <div className='flex flex-col py-2'>
            <label>Email</label>
            <input className='border p-2' type="text" value={values.Email} emailonChange={checkEmail}/>
          </div>

          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='border p-2' type="password"value={values.password} />
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













