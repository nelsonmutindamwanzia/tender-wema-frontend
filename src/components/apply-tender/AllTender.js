import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MakeProposalSidebar from "../makeproposal/MakeProposalSidebar";
import './alltenders.css';

function AllTenders() {
    const [allTenders, setAllTenders] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/tenders`)
            .then((response) => response.json())
            .then((data => {
                if (!filterQuery) {
                    setAllTenders(data);
                }
                else {
                    setAllTenders(
                        data.filter((tender) =>
                            tender.tender_name.toLowerCase().includes(filterQuery.toLowerCase()))
                    )
                }
            }))
    }, [filterQuery])

    return (
        <div>
            <MakeProposalSidebar />
            <div className="bidtenders-container">
                <br></br>
                <div class="search" >
                    <i class="fa fa-search"></i>
                    <input
                        type="text"
                        placeholder="Search Tender"
                        onChange={(e) => {
                            setFilterQuery(e.target.value);
                            console.log(filterQuery);
                        }}
                        className="form-searchbar"
                    />
                </div>
                <br></br>
                <h5>All Tenders</h5>
                <div className="bidtenders-cards-container" >
                    {allTenders.map((tender) => {
                        return (
                            <div>
                                <div className="bidtenders-card" key={tender.id} >
                                    <h5>{tender.tender_name} </h5>
                                    <h6>Tender Category: <strong>{tender.tender_category}</strong></h6>
                                    <h6>Timeline: <strong>{tender.timeline}</strong></h6>
                                    <h6>Application Deadline: <strong> {tender.application_deadline}</strong></h6>
                                    <p>Description: {tender.tender_description}</p>
                                    <Link to={`/tenders/${tender.id}`} ><span class="badge bg-primary">Submit Proposal</span></Link>
                                </div>
                            </div>


                        )

                    })}
                </div>

            </div>
        </div>
    )

}
export default AllTenders;