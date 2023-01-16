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

function App() {

  return (
      <>
      <Navi/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Wsignup setUser={setUser} user={user}/>}/>
        <Route path='/login' element={<Wlogin onLogin={setUser}/>}/>
        <Route path='/suppliers' element={<Suppliers/>}/>
        <Route path='/tenders/publish' element={<PublishedTender/>}/>
        <Route path='/proposals' element={<AllProposals/>}/>
        <Route path='/proposals/:id' element={<EachProposal/>}/>
        <Route path='/tenders' element={<Tenders/>}/>
        <Route path='/tenders/:id' element={<EachTender/>}/>
        <Route path="/tenders/results" element={<TenderResult />} />
        <Route path="/tenders/active" element={<ActiveTenders />} />
        <Route path='/tenders/make-proposal' element={<Makeproposal/>}/>
        <Route path='/bidtenders' element={<AllTenders/>}/>

      </Routes>
      <Footer/>
      </>
  )


}

export default App;