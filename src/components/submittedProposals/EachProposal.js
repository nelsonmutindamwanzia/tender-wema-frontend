import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";
import './eachproposal.css';

function EachProposal() {
    const params = useParams();
    const [proposals, setProposals] = useState([]);
    const [kra_pin, setKra_pin] = useState("");
    const [company_license, setCompany_license] = useState("");
    const [bank_statements, SetBank_statements] = useState("");
    const [tax_compliance, SetTax_compliance] = useState("");
    const [council_registration, SetCouncil_registration] = useState("");
    const [proposal_amount, SetProposal_amount] = useState(0);
    const [status, setStatus] = useState("false");

    useEffect(() => {
        fetch(`http://localhost:3000/proposals`)
            .then((response) => response.json())
            .then((data) => {
                setProposals(data);
            })
    });

    const showEachProposal = proposals.map(
        (proposal) =>
            proposal.id === parseInt(params.id) && (
                <div className="each-proposal-container">
                    <div className="each-proposal-header">
                        <h6>Proposal Status: <span class="badge bg-primary"> {proposal.status} </span> </h6>
                        <p>Proposal Submitted by: <strong>{proposal.supplier.company_name}</strong> </p>
                        <p>In response to tender Number: <strong>{proposal.tender.id}</strong> </p>
                        <p>Proposed Amount: <strong>{proposal.proposal_amount}</strong> </p>
                        <p>KRA PIN: <strong> {proposal.kra_pin} </strong></p>
                    </div>
                    <h5>Other Documents</h5>
                    <div className="proposal-documents">
                        
                        <div className="each-document">
                            <p>Company Licence</p>
                            <img src={proposal.company_license} alt="company_license" />
                        </div>
                        <div className="each-document">
                            <p>Bank Statement</p>
                            <img src={proposal.bank_statements} alt="bank_statements" />
                        </div>
                        <div className="each-document">
                            <p>Tax Compliance</p>
                            <img src={proposal.tax_compliance} alt="tax_compliance" />
                        </div>
                        <div className="each-document">
                            <p>Counsil Registration</p>
                            <img src={proposal.council_registration} alt="Counsil_registration" />
                        </div>
                    </div>

                </div>
            )
    );

    return (
        <div>
            <SupplierSideBar />
            {showEachProposal}
        </div>
    )

}
export default EachProposal;