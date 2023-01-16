import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import loginimg from '../assets/loginw.png'
import '../styles/wlogin.css'

function Wlogin () 

{
    const navigate = useNavigate();
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loggedEmail, setLoggedEmail] = useState("");
    
    function handleSubmit(event){
        event.preventDefault()
        fetch("https://tender-wema-production.up.railway.app/login", {
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
        .then((res) => res.json())
        .then((data) => localStorage.setItem("token", data.jwt));

        SetEmail("");
        setPassword("");
        }

        function getProfile(){
            fetch("https://tender-wema-production.up.railway.app/profile", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setLoggedEmail(data.email);
                });
        };

    return (
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
        <hr />

        {!loggedEmail ? (
            <button onClick={getProfile}>Get Profile</button>
        ) : (
            <>
            <h1>{loggedEmail}</h1>
            <button onClick={()=>{
                navigate('/')
                localStorage.removeItem("token")
            }}>Logout</button>
            </>
        )}
    </div>
    )
}

export default Wlogin