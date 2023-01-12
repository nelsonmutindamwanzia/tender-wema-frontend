import React from 'react'
import Leftside from './Rightside'
import Rightside from './Leftside'
import {Form, Button} from 'react-bootstrap';
import {  Row, Col} from 'react-bootstrap';

const Logintest = () => {
  return (
    <div>
        <Row className='log'>
        <Col><Rightside /></Col>
        <Col><Leftside /></Col>
      </Row>
    </div>
  )
}

export default Logintest