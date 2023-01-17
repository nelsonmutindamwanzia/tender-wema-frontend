import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import MakeProposalSidebar from '../makeproposal/MakeProposalSidebar';
import './active-tenders.css';

function ActiveTenders () {
    const [tenders, setTenders] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [dateFilter, setDateFilter] = useState({
        startDate: new Date(),
        endDate: null
    })
    // const filteredDates = tenders.filter(application_deadline => new Date(application_deadline) - new Date() > 0);
    
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
            <div className="at-container">
                <br></br>
                <div class="search" >
                    <i class="fa fa-search"></i>
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
                                    <h6>Tender Category: <strong>{tender.tender_category}</strong></h6>
                                    <h6>Tender Budget: <strong>{tender.budget}</strong></h6>
                                    <h6>Timeline: <strong>{timeline}</strong></h6>
                                    <h6>Application Deadline: <strong> {deadline}</strong></h6>
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