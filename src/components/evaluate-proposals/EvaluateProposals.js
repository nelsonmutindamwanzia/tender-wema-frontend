import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './evaluateproposals.css';

function EvaluateProposals() {

    // const navigate = useNavigate();
    const [quality, setQuality] = useState();
    const [maintenance, setMaintenance] = useState();
    const [completion_period, setCompletion_Period] = useState();
    const [price, setPrice] = useState();

    function handleSubmit(e){
        e.preventDefault();
        fetch("https://tender-wema-production.up.railway.app/tenders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quality,
                maintenance,
                completion_period,
                price,
                proposal_id : 4,
            }),
            }).then((res) => res.json())
            .then((data) => console.log(data));

            // navigate("/tenders")

            setQuality("");
            setMaintenance("");
            setCompletion_Period("");
            setPrice("")
        }

    return (
    <>
    <div className='ep-container'>
            <div className='ep-content'>
               <h1><b>Evaluate a Proposal</b></h1> 
                <form className='ep-form' 
                onSubmit = {handleSubmit}
                >
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='ep-group'>
                             <span> Quality </span>
                            <input type="number" id="ep-name" min="0" max="25"
                            onChange={(e) => setQuality(e.target.value)} 
                            value={quality}
                            />
                        </div>
                        
                        <div className='ep-group'>
                        <span>  Maintenance </span>
                        <input type="number" id="ep-budget"  min="0" max="25"
                        onChange={(e) => setMaintenance(e.target.value)} 
                        value={maintenance} 
                        />
                        </div>
                       
                    </div>
                    <div  className=' col-xs-12 col-md-6'>
                    <div className='ep-group'>
                             <span> Completion Period </span>
                            <input type="number" id="ep-email" min="0" max="25"
                            onChange={(e) => setCompletion_Period(e.target.value)} 
                            value={completion_period} 
                            />
                        </div>                        
                        <div className='ep-group'>
                            <span>  Price </span>
                                <input type="number" id="ep-address" min="0" max="25"
                                onChange={(e) => setPrice(e.target.value)} 
                                value={price}
                                />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className = "ep-button">
                            <button>Submit Tender</button>
                        </div>
                    </div> 
                    
                </div>
                </form>
            </div>
        </div>
        </>
  )
}

export default EvaluateProposals