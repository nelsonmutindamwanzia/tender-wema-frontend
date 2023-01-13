import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../supplierProfiles/supplier.css';
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";

function AllProposals() {
    const [allProposals, setAllProposals] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch("https://tender-wema-production.up.railway.app/proposals")
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
                <div className="cards-container" >
                    {allProposals.map((proposal) => {
                        return (
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                                <div className='col'>
                                    <div className="card">
                                        <div className="proposal-card" key={proposal.id} >
                                            <h6 className="card-title">{proposal.supplier.company_name} </h6>
                                            <p className="card-text">Tender ID: {proposal.tender_id}</p>
                                            <p className="card-text">Tender Name: {proposal.tender.tender_name}</p>
                                            <p className="card-text">Proposal Amount: {proposal.proposal_amount}</p>
                                            <p className="card-text">Email: {proposal.supplier.email} <span>{proposal.supplier.company_email}</span></p>
                                            
                                            <Link to={`/proposals/${proposal.id}`} ><span class="badge bg-primary">View</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )

                    })}
                </div>
            </div>
        </div>
    )

}
export default AllProposals;