import React from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navi from './components/Navi';
import { Route, Routes } from 'react-router-dom';
import SupplierPage from './components/supplierProfiles/SupplierPage';
import AllProposals from './components/submittedProposals/AllProposals';
import TenderResult from './components/Tender-Results';
import ActiveTenders from './components/Active-Tenders';
import PublishedTender from './components/Publishtender'
import Tenders from './components/Tenders/Tenders';
import Wlogin from './components/Wlogin';
import Wsignup from './components/Wsignup';
import Makeproposal from './components/makeproposal/Makeproposal';

function App() {
  return (
      <>
      <Navi/>
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Wsignup />}/>
        <Route path='/login' element={<Wlogin />}/>
        <Route path='/suppliers' element={<SupplierPage/>}/>
        <Route path='/tenders/publish' element={<PublishedTender/>}/>
        <Route path='/proposals' element={<AllProposals/>}/>
        <Route path="/tenders/results" element={<TenderResult />} />
        <Route path="/tenders/active" element={<ActiveTenders />} />
        <Route path='/tenders' element={<Tenders/>}/>
        <Route path='/tenders/makeproposal' element={<Makeproposal/>}/>
      </Routes>
      <Footer/>
      </>
  )
      

}

export default App;