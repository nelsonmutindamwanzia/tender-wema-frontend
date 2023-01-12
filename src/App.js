import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
// import Navbar from './components/supplierProfiles/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import SupplierPage from './components/supplierProfiles/SupplierPage';
import AllProposals from './components/submittedProposals/AllProposals';
import TenderResult from './components/Tender-Results';
import ActiveTenders from './components/Active-Tenders';
// import Login from './components/login';
import PublishedTender from './components/Publishtender'
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

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("https://tender-wema-production.up.railway.app/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
      <>
      <Navi/>
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        if (!user) return (
        <Route path='/signup' element={<Signup setUser={setUser} user={user}/>}/>
        <Route path='/login' element={<Login onLogin={setUser}/>}/>
        )
        <Route path='/suppliers' element={<SupplierPage/>}/>
        <Route path='/tenders/publish' element={<PublishedTender/>}/>
        <Route path='/proposals' element={<AllProposals/>}/>
        <Route path="/tenders/results" element={<TenderResult />} />
        <Route path="/tenders/active" element={<ActiveTenders />} />
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