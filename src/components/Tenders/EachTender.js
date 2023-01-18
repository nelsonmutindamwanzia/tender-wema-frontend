import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";
import "./eachtender.css"

function EachTender() {
    const params = useParams();
    const [tenders, setTenders] = useState([]);
    const [proposals, setProposals] = useState([]);
    const [tender_description, setTender_description] = useState("");

    useEffect(() => {
        fetch(`https://tender-wema-production.up.railway.app/tenders`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.tender)
            setTenders(data);
        })
    }, [setTenders]);
    

    const showEachTender = tenders.map(
        (tender) => 
        tender.id === parseInt(params.id) && (
            <div className="each-tender-container" >
                <div>  
                    <Link to={`/tender.id`} > {tender.tender_name} </Link> <br></br>             
                    <p>Tender Description: {tender.tender_description}</p>
                </div>
                <div>
                    <h6>Proposals recieved</h6>
                    <div>
                        
                        {tender.proposals.map((proposal) => (
                            <div>
                                <Link to={`/proposals/${proposal.id}`}>                                    
                                    <p>Proposal Entry Number: {proposal.id} </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );

    return (
        <div>
            <SupplierSideBar />
            {showEachTender}
        </div>
    )
}
export default EachTender