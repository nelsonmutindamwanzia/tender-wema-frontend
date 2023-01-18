import React from 'react';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import AllProposals from './components/submittedProposals/AllProposals';
import TenderResult from './components/tender-results/Tender-Results';
import ActiveTenders from './components/active-tenders/Active-Tenders';
import PublishedTender from './components/publish-tender/PublishedTender'
import Tenders from './components/Tenders/Tenders';
import Wlogin from './components/Wlogin';
import Wsignup from './components/Wsignup';
import Makeproposal from './components/makeproposal/Makeproposal';
import Suppliers from './components/supplierProfiles/Suppliers';
import EachProposal from './components/submittedProposals/EachProposal';
import EachTender from './components/Tenders/EachTender';
import AllTenders from './components/apply-tender/AllTenders';
import EvaluateProposals from './components/evaluate-proposals/EvaluateProposals';
import SubmitProposal from './components/apply-tender/SubmitProposal';
import EachSupplier from './components/supplierProfiles/EachSupplier';
import TLogin from './components/tenderer-login/TLogin';

function App() {

  return (
      <>
      {/* <Navi/> */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/signup' element={<Wsignup />}/>
        <Route path='/login' element={<Wlogin />}/>
        <Route path='/tenderer-login' element={<TLogin />}/>
        <Route path='/suppliers' element={<Suppliers/>}/>
        <Route path='/suppliers/:id' element={<EachSupplier/>}/>
        <Route path='/tenders/publish' element={<PublishedTender/>}/>
        <Route path='/proposals' element={<AllProposals/>}/>
        <Route path='/proposals/:id' element={<EachProposal/>}/>
        <Route path='/tenders' element={<Tenders/>}/>
        <Route path='/tenders/:id' element={<EachTender/>}/>
        <Route path="/tenders/results" element={<TenderResult />} />
        <Route path="/tenders/active" element={<ActiveTenders />} />
        <Route path='/tenders/make-proposal' element={<Makeproposal/>}/>
        <Route path='/bidtenders' element={<AllTenders/>}/>
        <Route path='/evaluation' element={<EvaluateProposals/>}/>
        <Route path='/bidtenders/:id' element={<SubmitProposal/>}/>

      </Routes>
      {/* <Footer/> */}
      </>
  )


}

export default App;