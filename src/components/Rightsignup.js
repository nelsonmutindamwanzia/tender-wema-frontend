import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';

const Rightsignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [company_name, setCompany_Name] = useState("");
    const [company_telephone, setCompany_Telephone] = useState("");
    const [company_address, setCompany_Address] = useState("");
    const [errors, setErrors] = useState({})

    function handleSignup(e){
        e.preventDefault();
        fetch("https://tender-wema-production.up.railway.app/signup", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        company_name,
        company_telephone,
        company_address,
        }),
        }).then((r) =>r.json())
    }

    return (
    <div>
        <div>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"5%"}} onSubmit={handleSignup}>
            <Form.Label><strong>Fill in the form below to Sign up</strong></Form.Label>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}/>
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </Form.Group>

                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm your password" 
                    onChange={(e) => setPasswordConfirmation(e.target.value)} 
                    value={passwordConfirmation}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Enter your company password</Form.Label>
                    <Form.Control type="text" placeholder="Enter your company name" 
                    onChange={(e) => setCompany_Name(e.target.value)}
                    value={company_name}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Company Telephone</Form.Label>
                    <Form.Control type="text" placeholder="Company Telephone" 
                    onChange={(e) => setCompany_Telephone(e.target.value)}
                    value={company_telephone}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control type="text" placeholder="Company Address" 
                    onChange={(e) => setCompany_Address(e.target.value)}
                    value={company_address}/>
                </Form.Group>

                <Button style={{marginTop:"5%"}}type="submit">Sign Up</Button>
            </Form>
        </div>
    </div>
    )
}

export default Rightsignup;