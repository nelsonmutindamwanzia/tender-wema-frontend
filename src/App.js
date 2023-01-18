import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
import { Route, Routes } from 'react-router-dom';
import AllProposals from './components/submittedProposals/AllProposals';
import TenderResult from './components/Tender-Results';
import ActiveTenders from './components/Active-Tenders';
import PublishedTender from './components/Publishtender'
import Tenders from './components/Tenders/Tenders';
import Wlogin from './components/Wlogin';
import Wsignup from './components/Wsignup';
import Makeproposal from './components/makeproposal/Makeproposal';
import Suppliers from './components/supplierProfiles/Suppliers';
import EachProposal from './components/submittedProposals/EachProposal';
import EachTender from './components/Tenders/EachTender';
import AllTenders from './components/apply-tender/AllTender';
import SubmitProposal from './components/apply-tender/SubmitProposal';

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
        <Route path='/suppliers' element={<Suppliers/>}/>
        <Route path='/tenders/publish' element={<PublishedTender/>}/>
        <Route path='/proposals' element={<AllProposals/>}/>
        <Route path='/proposals/:id' element={<EachProposal/>}/>
        <Route path='/tenders' element={<Tenders/>}/>
        <Route path='/tenders/:id' element={<EachTender/>}/>
        <Route path="/tenders/results" element={<TenderResult />} />
        <Route path="/tenders/active" element={<ActiveTenders />} />
        <Route path='/tenders/makeproposal' element={<Makeproposal/>}/>
        <Route path='/bidtenders' element={<AllTenders/>}/>
        <Route path='/bidtenders/:id' element={<SubmitProposal/>}/>

      </Routes>
      <Footer/>
      </>
  )
      

}

export default App;