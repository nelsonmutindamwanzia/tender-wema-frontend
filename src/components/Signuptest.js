import React from 'react'
import Leftsignup from './Leftsignup'
import Rightsignup from './Rightsignup'
import {Form, Button} from 'react-bootstrap';
import {  Row, Col} from 'react-bootstrap';

const Signuptest = () => {
  return (
    <div>
        <Row className='log'>
            <Col><Leftsignup /></Col>
            <Col><Rightsignup /></Col>
      </Row>
    </div>
  )
}

export default Signuptest