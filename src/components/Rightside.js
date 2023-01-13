import React, { useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Rightside = ({onLogin}) => {

    const navigate = useNavigate();
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        fetch("https://tender-wema-production.up.railway.app/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        }).then((r) => {
        if (r.ok) {
        r.json().then((user) => onLogin(user)) 
        navigate("/tenders");
        }else {
        r.json().then((err) => setError(err.errors))
        navigate("/login");
        }
        });
        }

    return (
    <div>
        <Form.Label><strong>Login</strong></Form.Label>
            <Form style={{width:"80%", marginLeft:"5%", marginTop:"10%"}} onSubmit={handleSubmit}>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" 
                    value={email}
                    onChange={(event) => SetEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}/>
                </Form.Group>
                <Button style={{marginTop:"5%"}}type="submit">Login</Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </Form>
        </div>
  )
}

export default Rightside;