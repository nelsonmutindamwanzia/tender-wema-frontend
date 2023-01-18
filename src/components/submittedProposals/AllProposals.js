import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../supplierProfiles/supplier.css';
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";
import {FaSearch} from "react-icons/fa"
import Footer from "../Footer";

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
                <br/>
                <div class="search" >
                <FaSearch style={{
                                    color: "#5A96F9",
                                    }}/>  
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
                                        <div className="proposal-card" key={proposal.id} >
                                            <h5>{proposal.supplier.company_name} </h5>
                                            <table className="table">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>Tender ID:</td>
                                                                    <td>{proposal.tender_id}</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Tender Name:</td>
                                                                    <td>{proposal.tender.tender_name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>Proposal Amount: </td>
                                                                    <td>{proposal.proposal_amount}</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>AEmail:</td>
                                                                    <td> {proposal.supplier.email}</td>
                                                                    </tr>
                                                                </tbody>
                                            </table>
                                            <div className="btnholder">
                                            <Link to={`/proposals/${proposal.id}`} ><span class="btn" id='proposetender'>View</span></Link>
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