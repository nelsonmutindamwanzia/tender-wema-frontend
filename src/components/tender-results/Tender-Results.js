import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import './Tender-Result.css';
import MakeProposalSidebar from '../makeproposal/MakeProposalSidebar';

function TenderResult () {

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
                <br/>
                <div className="tr-cards-container" >
                        <div className="box-card">
                            <div className="tr-card">
                                <table className="table">
                                            <tbody className='tender-results'>
                                                <tr>
                                                    <td>Tender ID: </td>
                                                    <td>023/2021</td>
                                                </tr>
                                                <tr>
                                                    <td>Proposal Amount: </td>
                                                    <td>$5000</td>
                                                </tr>
                                                <tr>
                                                    <td>Proposal Score: </td>
                                                    <td>95%</td>
                                                </tr>
                                                <tr>
                                                    <td>Status</td>
                                                    <td className='awarded'> Awarded</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                {/* <span class="badge bg-primary">View</span> */}
                            </div>
                        </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default TenderResult;