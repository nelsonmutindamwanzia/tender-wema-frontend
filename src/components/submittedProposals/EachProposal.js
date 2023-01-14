import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
                    <div>
                        <h6>Proposal Status: <span class="badge bg-primary"> {proposal.status} </span> </h6>
                        <h4>Proposal Submitted by: {proposal.supplier.company_name} </h4>
                        <h4>In response to tender Number: {proposal.tender.id} </h4>
                        <h4>Proposed Amount: {proposal.proposal_amount} </h4>
                        <div>
                            <div>
                                <img src={proposal.kra_pin} alt="KRA PIN" height="600px"  />
                            </div>
                            <div>
                                <img src={proposal.company_license} alt="company_license" height="600px" />
                            </div>
                            <div>
                                <img src={proposal.bank_statements} alt="bank_statements" height="600px" />
                            </div>
                            <div>
                                <img src={proposal.tax_compliance} alt="tax_compliance" height="600px" />
                            </div>
                            <div>
                                <img src={proposal.council_registration} alt="Counsil_registration" height="600px" />
                            </div>
                        </div>

                    </div>
                </div>
            )
    );

    return (
        <div>
            <p>teender</p>
            {/* {showEachProposal} */}
        </div>
    )

}
export default EachProposal;