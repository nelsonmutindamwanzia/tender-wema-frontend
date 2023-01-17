import React from 'react';
import Footer from '../Footer';
import MakeProposalSidebar from '../makeproposal/MakeProposalSidebar';
import './active-tenders.css';


function ActiveTenders () {
    return (
        <>
        <MakeProposalSidebar/>
        <div className='at-container'>
            <div className='at-content'>
                <h2> Active Tenders </h2> 
                <div className='results-container'>
                <div className='single-tender'>
                    <h5> Crown Plaza Tender</h5>
                    <table className='table table-borderless'>
                        <tr>
                            <td>Tender ID  </td>
                            <td>01/2022  </td>
                        </tr>
                        <tr>
                            <td> Budget  </td>
                            <td>  $ 2000 - $ 4000 </td>
                        </tr>
                        <tr>
                            <td> Timeline </td>
                            <td> Jan 23 - Jun 23 </td>
                        </tr>
                        <tr>
                            <td> Application Deadline</td>
                            <td className='text-success'> Dec 2022</td>
                        </tr>
                    </table>
                    <button> View</button>
                </div>       
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ActiveTenders;