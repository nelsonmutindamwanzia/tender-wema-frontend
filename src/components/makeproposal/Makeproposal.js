import React, { useState } from 'react'
import './makeproposal.css'
import MakeProposalSidebar from './MakeProposalSidebar';

function Makeproposal () {
    const [tender_id, setTender_Id] = useState("");
    const [kra_pin, setKra_Pin] = useState("");
    const [status, setStatus] = useState("");
    const [company_license, setCompany_License] = useState("");
    const [bank_statements, setBankStatements] = useState("");
    const [council_registration, setCouncil_Registration] = useState("");
    const [tax_compliance, setTax_Compliance] = useState("");
    const [proposal_amount, setProposal_Amount] = useState("");

    function handleSubmit(){
        fetch("https://tender-wema-production.up.railway.app/proposals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tender_id,
                kra_pin,
                company_license,
                bank_statements,
                tax_compliance,
                council_registration,
                proposal_amount,
                status: false,
                supplier_id: 4,
            }),
            }).then((res) => res.json())
            .then((data)=>console.log(data))

            setTender_Id("")
            setKra_Pin("")
            setCompany_License("")
            setBankStatements("")
            setCouncil_Registration("")
            setTax_Compliance("")
            setProposal_Amount("")
    }

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

                <form className='publish-form' onSubmit={handleSubmit}>
                    {/* <h4 style="text-align:center;"> Crown Plaza Tender Proposal</h4> */}

                <div className='row'>

                    <div className='col-md-6'>

                        <div className='tender-group'>
                             <span> Tender id </span>
                            <input type="text" id="tender-name" onChange={(e) => setTender_Id(e.target.value)} 
                        value={tender_id}/>
                        </div>

                        <div className='tender-group'>
                            <span>  Bank Statement </span>
                              <input type="file" id="tender-address" />
                        </div>

                        <div className='tender-group'>
                                <span>  Tax Compliance </span>
                                <input type="file" id="tender-date" />
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
                            <input type="file" id="tender-budget" />
                        </div>
                        <div className='tender-group'>
                            <span>  Council Registration </span>
                            <input type="file" id="tender-phone" />
                        </div>

                        <div className='tender-group'>
                        <span>  Proposal Amount ($) </span>
                        <input type="number" id="tender-budget" />
                        </div>

                        {/* <div className='tender-group'>
                         <span>  Tender Description </span>
                        <input type="text" id="tender-description" value="" />
                        </div> */}
                    </div>

                   

                    <div className='col-md-12'>
                            <button>Submit Proposal</button>
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