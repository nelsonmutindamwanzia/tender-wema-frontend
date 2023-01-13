import React from 'react'
import Leftside from './Rightside'
import Rightside from './Leftside'
import {  Row, Col} from 'react-bootstrap';

const Logintest = ({onLogin}) => {
  return (
    <div>
        <Row className='log'>
        <Col><Rightside onLogin={onLogin}/></Col>
        <Col><Leftside onLogin={onLogin}/></Col>
      </Row>
    </div>
  )
}

export default Logintest