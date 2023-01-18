import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import loginimg from '../assets/loginw.png'
import '../styles/wlogin.css'
import Footer from './Footer';
import Navi from './Navi';

function Wlogin () 

{
    const navigate = useNavigate();
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    
    function handleSubmit(event){
        event.preventDefault()
        fetch("https://tender-wema-production.up.railway.app/tenderer-login", {
        method: "POST",
        headers: {
            Accepts: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            supplier: {
                email: email,
                password: password,
            },
        }),
        })
        .then (r => {
            if (r.ok) {
                r.json().then(data => {
                    localStorage.setItem("token", data.jwt)
                    navigate('/tenders')
                        
                    });
            } else {
                r.json().then(data => {
                    setError(data.errors)
                })
            } 
        })

        SetEmail("");
        setPassword("");
        }

    return (
        <>
    <Navi/>
    <div>
        <div className='container-fluid'>
            <div className='row'>
                {/* image */}
                <div className='col'>
                    <img className='login-image' src={loginimg} alt='loginimg' />
                </div>
                {/* form */}
                <div className='col'>
                    <br/> <br/> <br/>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Enter your email</label>
                        <input type="email" placeholder="xxxx@gmail.com" 
                    value={email}
                    onChange={(event) => SetEmail(event.target.value)}
                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Enter your Password</label>
                        <input type="password" placeholder="xxxxx" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                        class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
                </div>
            </div>
        </div>        
    </div>
    <Footer/>
    </>
    )
}

export default Wlogin