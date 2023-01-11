import React, { useEffect, useState } from "react";
import '../supplierProfiles/supplier.css';

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
        <div className="supplier-container" >
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
                                    <div className="card-body" key={proposal.id} >
                                        <h5 className="card-title">{proposal.supplier_id.company_name} </h5>
                                        <p className="card-text">Tender ID: <span>{proposal.tender_id}</span></p>
                                        <p className="card-text">Proposal Amount: <span>{proposal.proposal_amount}</span></p>
                                        <p className="card-text">Email: <span>{proposal.supplier_id.company_email}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )

                })}
            </div>
        </div>
    )

}
export default AllProposals;