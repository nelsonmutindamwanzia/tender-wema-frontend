import React from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
// import Navbar from './components/supplierProfiles/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import SupplierPage from './components/supplierProfiles/SupplierPage';
// import Login from './components/login';
import PublishedTender from './components/Publishtender';
import Leftside from './components/Leftside'

//Trying new 
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Alert, Row, Col} from 'react-bootstrap';
import Rightside from './components/Rightside';
import Rightsignup from './components/Rightsignup';
import Leftsignup from './components/Leftsignup';
import Signuptest from './components/Signuptest';
import Logintest from './components/Logintest';

function App() {
  return (
      <>
      <Navi/>
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Signuptest/>}/>
        <Route path='/login' element={<Logintest/>}/>
        <Route path='/suppliers' element={<SupplierPage/>}/>
        <Route path='/tenders/publish' element={<PublishedTender/>}/>
      </Routes>
      <Footer/>
      </>
  )
      

}

export default App;