import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MakeProposalSidebar from "../makeproposal/MakeProposalSidebar";
import './alltenders.css';
import { FaSearch } from "react-icons/fa"
import Footer from "../Footer";


function AllTenders() {

    const navigate = useNavigate();
    const [allTenders, setAllTenders] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [loggedEmail, setLoggedEmail] = useState("");

    useEffect(() => {
        fetch(`https://tender-wema-production.up.railway.app/tenders`)
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

    function getProfile() {
        fetch("https://tender-wema-production.up.railway.app/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setLoggedEmail(data.email);
            });
    };

    return (
        <>
            <div>
                <div className="sd-bar">
                    <MakeProposalSidebar />
                </div>
                <div className="bidtenders-container">
                    {/* search */}
                    <div class="search" >
                        <FaSearch style={{
                            color: "#5A96F9",
                        }} />
                        <input
                            type="text"
                            placeholder="Search Tenders"
                            onChange={(e) => {
                                setFilterQuery(e.target.value);
                                console.log(filterQuery);
                            }}
                            className="form-searchbar"
                        />
                    </div>
                    <br></br>

                    {/* all tenders */}

                    <div className="login-logout">
                        You are signed in as: {loggedEmail}
                        {!loggedEmail ? (
                            <button onClick={getProfile}> {loggedEmail}</button>
                        ) : (
                            <>

                                <button onClick={() => {
                                    navigate('/')
                                    localStorage.removeItem("token")
                                }}>Logout</button>
                            </>
                        )}
                    </div>
                    <h5>All Tenders</h5>
                    <div className="bidtenders-cards-container" >
                        {allTenders.map((tender) => {
                            const timeline = new Date(tender.timeline).toLocaleString('en-GB', { timeZone: 'EAT' })
                            const deadline = new Date(tender.application_deadline).toLocaleString('en-GB', { timeZone: 'EAT' })
                            return (
                                <div>
                                    <div className="bidtenders-card" key={tender.id} >
                                        <h5>{tender.tender_name} </h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Application Status: </td>
                                                    <td><span class="badge bg-secondary"> {tender.status}</span> </td>
                                                </tr>
                                                <tr>
                                                    <td>Tender Category</td>
                                                    <td>{tender.tender_category}</td>
                                                </tr>
                                                <tr>
                                                    <td>Timeline:</td>
                                                    <td>{timeline}</td>
                                                </tr>
                                                <tr>
                                                    <td>Application Deadline:</td>
                                                    <td>{deadline}</td>
                                                </tr>
                                                <tr>
                                                    <td>Description</td>
                                                    <td>{tender.tender_description}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="btnholder">
                                            <Link to={`/tenders/${tender.id}`} ><span class="btn" id="submittender">Submit Proposal</span></Link>
                                        </div>
                                    </div>
                                </div>


                            )

                        })}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}
export default AllTenders;