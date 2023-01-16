import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import signupimg from '../assets/signup.png'
import '../styles/wlogin.css'

function Wsignup(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [company_name, setCompany_Name] = useState("");
    const [company_telephone, setCompany_Telephone] = useState("");
    const [company_address, setCompany_Address] = useState("");
    const [errors, setErrors] = useState({})

    function handleSignup(e){
        e.preventDefault();
        fetch("https://tender-wema-production.up.railway.app/suppliers", {
        method: "POST",
        headers: {
            Accepts: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            supplier: {
                email,
                password,
                password_confirmation: passwordConfirmation,
                company_name,
                company_telephone,
                company_address,
            },
        }),
        }).then((res) => res.json())
        .then((data) => console.log(data));
        navigate("/login")
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
        setCompany_Name("");
        setCompany_Telephone("");
        setCompany_Address("");
    }

  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                {/* image */}
                <div className='col'>
                    <img className='login-image' src={signupimg} alt='signupimg' />
                </div>
                {/* form */}
                <div className='col'>
                    <br/> <br/> <br/>
                <form onSubmit={handleSignup}>
                    <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter your email</label>
                            <input type="email" placeholder="xxxx@gmail.com" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                    </div>
                    <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Enter your Password</label>
                            <input type="password" placeholder="xxxxx" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                        class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm your Password</label>
                            <input type="password" placeholder="xxxxx" 
                        onChange={(e) => setPasswordConfirmation(e.target.value)} 
                        value={passwordConfirmation}
                        class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Enter your company name</label>
                            <input type="text" placeholder="xxxxx" 
                        onChange={(e) => setCompany_Name(e.target.value)}
                        value={company_name}
                        class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Company Telephone No.</label>
                            <input type="text" placeholder="+245xxxx" 
                        onChange={(e) => setCompany_Telephone(e.target.value)}
                        value={company_telephone}
                        class="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Company Address</label>
                            <input type="text" placeholder="xxxx" 
                        onChange={(e) => setCompany_Address(e.target.value)}
                        value={company_address}
                        class="form-control" id="exampleInputEmail1"/>
                    </div>
                    <button type="submit" class="btn">Sign Up</button>
                </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Wsignup