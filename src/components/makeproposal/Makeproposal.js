import React from 'react'
// import '../styles/publishtender.css'
import './makeproposal.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

// import Navi from '../Navi';
// import Footer from '../Footer';
import MakeProposalSidebar from './MakeProposalSidebar';
import { useNavigate } from 'react-router';
// import '../supplierProfiles/Navbar.css'


function Makeproposal () {

    const navigate = useNavigate();

    const createProposal = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/proposals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // tender_id: tenderId,
                // kra_pin: kra_pin,
                // company_license: company_license,
                // bank_statements: bank_statements,
                // tax_compliance: tax_compliance,
                // council_registration: council_registration,

            }),
        })
            .then((response) => response.json())
            setTimeout(() => {
                navigate("/proposals");
            }, 1000)
    };



    return (
        <>
        <MakeProposalSidebar/>
        <div className='publish-container'>
            

            {/* <Navi/> */}
            <div className='publish-content'>
                <br/>
                <div className="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="Search" aria-label="Search" />
                </div>
                <br/>

               <h1> Make a proposal </h1> 

                <form className='publish-form'>
                    {/* <h4 style="text-align:center;"> Crown Plaza Tender Proposal</h4> */}

                <div className='row'>

                    <div className='col-md-6'>

                        <div className='tender-group'>
                             <span> Tender id </span>
                            <input type="text" id="tender-name" />
                        </div>

                        <div className='tender-group'>
                             <span> Proposal Name </span>
                            <input type="email" id="tender-email" />
                        </div>

                        <div className='tender-group'>
                            <span>  Bank Statement </span>
                              <input type="url" id="tender-address" />
                        </div>

                        <div className='tender-group'>
                                <span>  Tax Compliance </span>
                                <input type="url" id="tender-date" />
                        </div>

                        {/* <div className='tender-group'>
                         <span>  Application Deadline </span>
                        <input type="date" id="tender-date" value="" />
                         </div> */}

                       
                    </div>

                    <div  className=' col-xs-12 col-md-6'>
                        
                        <div className='tender-group'>
                            <span> KRA pin </span>
                            <input type="text" id="tender-category"/>
                        </div>
                        <div className='tender-group'>
                            <span> Company licence </span>
                            <input type="number" id="tender-budget" />
                        </div>
                        <div className='tender-group'>
                            <span>  Council Registration </span>
                            <input type="number" id="tender-phone" />
                        </div>

                        <div className='tender-group'>
                        <span>  Proposal Amaount ($) </span>
                        <input type="number" id="tender-budget" />
                        </div>

                        {/* <div className='tender-group'>
                         <span>  Tender Description </span>
                        <input type="text" id="tender-description" value="" />
                        </div> */}
                    </div>

                   
                    <div>
                <button
                    className="my-2 btn btn-primary"
                    type="submit"
                    onClick={createProposal}
                >
                    Submit Proposal
                </button>
            </div>
                    
                        {/* <Footer/> */}
                </div>




                </form>

                


            </div>


        </div>
        </>
    )


}

export default Makeproposal;