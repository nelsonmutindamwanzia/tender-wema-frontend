import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../supplierProfiles/supplier.css';
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";

function AllProposals() {
    const [allProposals, setAllProposals] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/proposals")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setAllProposals(data);
                }
                else {
                    setAllProposals(
                        data.filter((proposal) =>
                            proposal.name.toLowerCase().includes(filterQuery.toLowerCase()))
                    )
                }
            });
    }, [filterQuery]);

    return (
        <div>
            <SupplierSideBar />
            <div className="proposal-container" >
                <br></br>
                <div class="search" >
                    <i class="fa fa-search"></i>
                    <input
                        type="text"
                        placeholder="Search Proposal"
                        onChange={(e) => {
                            setFilterQuery(e.target.value);
                            console.log(filterQuery);
                        }}
                        className="form-searchbar"
                    />
                </div>

                <br></br>

                <h5>Submitted Proposals</h5>
                <div className="proposal-cards-container" >
                    {allProposals.map((proposal) => {
                        return (
                            // <div className='row row-cols-1 row-cols-md-3'>
                            //     <div className='coln'>
                            //         <div className="cardg">
                                        <div className="proposal-card" key={proposal.id} >
                                            <h5>{proposal.supplier.company_name} </h5>
                                            <h6>Tender ID: <strong>{proposal.tender_id}</strong></h6>
                                            <h6>Tender Name:<strong> {proposal.tender.tender_name}</strong></h6>
                                            <h6>Proposal Amount: <strong>{proposal.proposal_amount}</strong></h6>
                                            <p>Email: {proposal.supplier.email}</p>
                                            
                                            <Link to={`/proposals/${proposal.id}`} ><span class="badge bg-primary">View</span></Link>
                                        </div>
                            //         </div>
                            //     </div>
                            // </div>


                        )

                    })}
                </div>
            </div>
        </div>
    )

}
export default AllProposals;