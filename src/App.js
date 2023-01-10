import React from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
import Navbar from './components/supplierProfiles/Navbar';
import { Route, Routes } from 'react-router-dom';
import Suppliers from './components/supplierProfiles/Suppliers';


function App() {
  return (
      <>
      <Navi/>
      <Landing/>
      <Footer/>
        {/* <Navbar />
        <Routes>
          <Route path='/' element={<Suppliers /> } />
        </Routes> */}
      </>
    
      
import Home from './components/Home';
import Login from './components/login'

import { Navbar } from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div >
      {/* <Home/> */}
      <Navbar/>
      <Login />
      <Signup />
      
    </div>
  );
}

export default App;