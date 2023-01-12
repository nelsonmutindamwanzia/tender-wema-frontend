import React from 'react';
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
import Login from './components/login';
import PublishedTender from './components/Publishtender'

function App() {
  return (
      <>
      <Navi/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
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