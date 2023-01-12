import React from 'react'
import {Form, Button} from 'react-bootstrap';


const Rightsignup = () => {
  return (
    <div>
        <div>
            <br />
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"1%"}}>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Enter your company password</Form.Label>
                    <Form.Control type="text" placeholder="Enter your company name" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Company Telephone</Form.Label>
                    <Form.Control type="text" placeholder="Company Telephone" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Company Address</Form.Label>
                    <Form.Control type="text" placeholder="Company Address" />
                </Form.Group>

                <Button style={{marginTop:"5%"}}type="submit">Login</Button>
            </Form>
        </div>
    </div>
  )
}

export default Rightsignup