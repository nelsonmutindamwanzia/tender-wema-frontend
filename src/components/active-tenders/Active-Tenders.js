import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import MakeProposalSidebar from '../makeproposal/MakeProposalSidebar';
import './active-tenders.css';
import { FaSearch } from "react-icons/fa"


function ActiveTenders () {
    const [tenders, setTenders] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [dateFilter, setDateFilter] = useState({
        startDate: new Date(),
        endDate: null
    })
    
    useEffect(() => {
        fetch(`https://tender-wema-production.up.railway.app/tenders`)
            .then((response) => response.json())
            .then((data => {
                if (!filterQuery) {
                    setTenders(data);
                }
                else {
                    setTenders(
                        data.filter((tender) =>
                            tender.tender_name.toLowerCase().includes(filterQuery.toLowerCase()))
                    )
                }
            }))
    }, [filterQuery])

    return (
        <>
        <div>
            <MakeProposalSidebar />
            <div className="actiive-tender-container">
                <br/><br/>
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
                <br/><br/>
                <h5>Active Tenders</h5>
                <div className="at-cards-container" >
                {tenders.filter(tender => {
                    let filterPass = true
                    const date = new Date(tender.application_deadline)
                    if (dateFilter.startDate) {
                        filterPass = filterPass && (new Date(dateFilter.startDate) < date)
                    }
                    if (dateFilter.endDate) {
                        filterPass = filterPass && (new Date(dateFilter.endDate) > date)
                    }
                    //if filterPass comes back `false` the row is filtered out
                    return filterPass
                    }).map((tender) => {
                        const timeline = new Date(tender.timeline).toLocaleString('en-GB', { timeZone: 'EAT' })
                        const deadline = new Date(tender.application_deadline).toLocaleString('en-GB', { timeZone: 'EAT' })
                        return (
                            <div>
                                <div className="at-card" key={tender.id} >
                                    <h5>{tender.tender_name} </h5>
                                    <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Tender Category: </td>
                                                    <td> {tender.tender_category}</td>
                                                </tr>
                                                <tr>
                                                    <td>Tender Budget: </td>
                                                    <td>{tender.budget}</td>
                                                </tr>
                                                <tr>
                                                    <td>Timeline:</td>
                                                    <td>{timeline}</td>
                                                </tr>
                                                <tr>
                                                    <td>Application Deadline:</td>
                                                    <td>{deadline}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    {/* <p>Description: {tender.tender_description}</p> */}
                                    {/* <Link to={`/tenders/${tender.id}`} ><span class="badge bg-primary">View Tender</span></Link> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ActiveTenders;