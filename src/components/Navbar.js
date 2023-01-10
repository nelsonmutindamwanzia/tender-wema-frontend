import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.scss'

export const Navbar = () => {
  return (
    <div className='sum'>
        <div className='logo'>
            Tender Wema
        </div>
        <div className='item'>
            <ul className='ul'>
                <Link to='/'>Home</Link>
            </ul>

            <ul className='ul'>
                <Link to='/About Us'>About Us</Link>
            </ul>

            <ul className='ul'>
                <Link to='/Tenders'>Tenders</Link>
            </ul>

            <ul className='ul'>
                <Link to='/Sign Up'>Sign Up</Link>
            </ul>

            <ul className='ul'>
                <Link to='/Login'>Login</Link>
            </ul>
        </div>
    </div>
  )
}
