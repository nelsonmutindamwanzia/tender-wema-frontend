import React from 'react'
import loginImg from '../assets/draw2.svg'

import {Image} from "react-bootstrap";

const Leftside = () => {
  return (
    <div>
        <Image src={loginImg} thumbnail style={{border:"none"}}/>
    </div>
  )
}

export default Leftside;