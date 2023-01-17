import React, { useEffect, useState } from 'react';
// import Footer from '../Footer';
import './Tender-Result.css';
import MakeProposalSidebar from '../makeproposal/MakeProposalSidebar';

function TenderResult () {

    const [tenderResults, setTenderResults] = useState([]);
    const [proposal_score, setProposal_Score] = useState([])
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch("https://tender-wema-production.up.railway.app/proposal_scores")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setTenderResults(data);
                    setProposal_Score(setTenderResults.proposals)
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
                <div className="supplier-cards-container" >
                {tenderResults.map((tenderResult) => {
                    return (
                        <div className="box-card">
                            <div className="supplier-card" key={tenderResult.id} >
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


                {/* <div className='results-container'>
                <div className='single-tender'>
                    <h5> Crown Plaza Tender</h5>
                    <table className='table table-borderless'>
                        <tr>
                            <td>Tender ID  </td>
                            <td>01/2022  </td>
                        </tr>
                        <tr>
                            <td> Proposal Amount  </td>
                            <td>  $ 5000 </td>
                        </tr>
                        <tr>
                            <td> Proposal Score </td>
                            <td> 95% </td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td className='text-success'> Awarded</td>
                            </tr>
                    </table>
                    <button> View</button>
                </div>       
            </div> */}
            </div>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default TenderResult;