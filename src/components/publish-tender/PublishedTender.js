import React, { useState } from "react";
import { useNavigate } from 'react-router';
import SupplierSideBar from '../supplierProfiles/SupplierSideBar';
// import '../styles/publishtender.css'
// import { FaClock, FaBolt, FaCheckDouble } from "react-icons/fa";
// import {GrDocumentPerformance} from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./publishtender.css";
import Footer from '../Footer';

function PublishedTender () {
    const navigate = useNavigate();

    const [tender_name, setTender_Name] = useState("");
    const [tender_category, setTender_Category] = useState("");
    const [tender_description, setTender_Description] = useState("");
    const [timeline, setTimeline] = useState("");
    const [application_deadline, setApplication_Deadline] = useState("");
    const [budget, setBudget] = useState("");
    const [tenderer_id, setTenderer_Id] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch("https://tender-wema-production.up.railway.app/tenders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tender_name,
                tender_category,
                tender_description,
                timeline,
                application_deadline,
                budget,
                tenderer_id : 1,
            }),
            }).then((res) => res.json())
            .then((data) => console.log(data));

            navigate("/tenders")

            setTender_Name("");
            setTender_Category("");
            setTender_Description("");
        }

    return (
        <>
        <SupplierSideBar/>
        <div className='publisher-container'>
            <div className='publish-navigation'>
            <div className='publish-content'>
               <h1><b>Publish a Tender</b></h1> 
                <form className='publish-form' 
                onSubmit = {handleSubmit}
                >
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='tender-group'>
                             <span> Tender Names </span>
                            <input type="text" id="tender-name" 
                            onChange={(e) => setTender_Name(e.target.value)} 
                            value={tender_name}
                            />
                        </div>
                        <div className='tender-group'>
                                <span>  Timeline From </span>
                                <input type="datetime-local" id="tender-date" 
                                onChange={(e) => setTimeline(e.target.value)} 
                                value={timeline} 
                                />
                        </div>
                        <div className='tender-group'>
                        <span>  Budget ($) </span>
                        <input type="number" id="tender-budget"  
                        onChange={(e) => setBudget(e.target.value)} 
                        value={budget} 
                        />
                        </div>
                       
                    </div>
                    <div  className=' col-xs-12 col-md-6'>
                    <div className='tender-group'>
                             <span> Tender Category </span>
                            <input type="text" id="tender-email" 
                            onChange={(e) => setTender_Category(e.target.value)} 
                            value={tender_category} 
                            />
                        </div>
                        <div className='tender-group'>
                         <span>  Application Deadline </span>
                        <input type="datetime-local" id="tender-date"  
                        onChange={(e) => setApplication_Deadline(e.target.value)} 
                        value={application_deadline} 
                        />
                         </div>
                        
                        <div className='tender-group'>
                            <span>  Tender Description </span>
                                <textarea type="text" id="tender-address" rows="4" cols="15"
                                onChange={(e) => setTender_Description(e.target.value)} 
                                value={tender_description}
                                />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className = "pt-button">
                            <button>Submit Tender</button>
                        </div>
                    </div> 
                    
                </div>
                </form>
            </div></div>
        </div>
        <Footer/>
        </>
    )
}

export default PublishedTender;