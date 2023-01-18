import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import './Tender-Result.css';
import MakeProposalSidebar from '../makeproposal/MakeProposalSidebar';

function EvaluatedResults () {

    const [tenderResults, setTenderResults] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch("https://tender-wema-production.up.railway.app/proposal_scores")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setTenderResults(data);
                }
                else {
                    setTenderResults(
                        data.filter((tenderResult) =>
                            tenderResult.company_name.toLowerCase().includes(filterQuery.toLowerCase()))
                    )
                }
            });
    }, [filterQuery]);

    return (
        <>
        <MakeProposalSidebar />
        <div className='t-r-container'>
            <div className='t-r-content'>
                <h2> Tender Results </h2> 
                <div className="tr-cards-container" >
                {tenderResults.map((tenderResult) => {
                    return (
                        <div className="box-card">
                            <div className="tr-card" key={tenderResult.id} >
                                <p>Price:  {tenderResult.price} </p>
                                <p>Quality: {tenderResult.quality}</p>
                                <p>Maintenance: {tenderResult.maintenance}</p>
                                <p>Completion Period: {tenderResult.completion_period}</p>
                                {/* <span class="badge bg-primary">View</span> */}
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

export default EvaluatedResults;