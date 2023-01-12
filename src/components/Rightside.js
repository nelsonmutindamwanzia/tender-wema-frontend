import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {Form, Button} from 'react-bootstrap';

const Leftside = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email and password
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('Invalid email address');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    // Perform login logic here (e.g. sending a request to the server)

    // Redirect to homepage
    history('/');
    }
  return (
    <div>
            
            <Form onSubmit={handleSubmit} style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email" />
                    {/* {errors.email && <p>{errors.email}</p>} */}
                </Form.Group>

                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" 
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password" />
                    {/* {errors.password && <p>{errors.password}</p>} */}
                </Form.Group>
                <Button style={{marginTop:"5%"}}type="submit">Login</Button>
            </Form>
        </div>
  )
}

export default Leftside