import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
import { Route, Routes } from 'react-router-dom';
import SupplierPage from './components/supplierProfiles/SupplierPage';
import AllProposals from './components/submittedProposals/AllProposals';
import TenderResult from './components/Tender-Results';
import ActiveTenders from './components/Active-Tenders';
import PublishedTender from './components/Publishtender'
// import Signuptest from './components/Signuptest';
// import Logintest from './components/Logintest';
// import 'bootstrap/dist/css/bootstrap.css'
import Tenders from './components/Tenders/Tenders';
import Wlogin from './components/Wlogin';
import Wsignup from './components/Wsignup';

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
        <Route path='/signup' element={<Wsignup setUser={setUser} user={user}/>}/>
        <Route path='/login' element={<Wlogin onLogin={setUser}/>}/>
        )
        <Route path='/suppliers' element={<SupplierPage/>}/>
        <Route path='/tenders/publish' element={<PublishedTender/>}/>
        <Route path='/proposals' element={<AllProposals/>}/>
        <Route path="/tenders/results" element={<TenderResult />} />
        <Route path="/tenders/active" element={<ActiveTenders />} />
        <Route path='/tenders' element={<Tenders/>}/>
      </Routes>
      <Footer/>
      </>
  )
      

}

export default App;