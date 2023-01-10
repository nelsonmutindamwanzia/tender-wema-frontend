import React from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
// import Navbar from './components/supplierProfiles/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/login';

function App() {
  return (
      <>
      <Navi/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </>
      
    
  )
      
// import Home from './components/Home';
// import Login from './components/login'

// import { Navbar } from "./components/Navbar";
// import Signup from "./components/Signup";

// function App() {
//   return (
//     <div >
//       {/* <Home/> */}
//       <Navbar/>
//       <Login />
//       <Signup />
      
//     </div>
//   );
}

export default App;