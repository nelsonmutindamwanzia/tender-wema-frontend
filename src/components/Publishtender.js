import React from 'react'
import '../styles/publishtender.css'
// import { FaClock, FaBolt, FaCheckDouble } from "react-icons/fa";
// import {GrDocumentPerformance} from "react-icons/gr";
// import 'bootstrap/dist/css/bootstrap.min.css';


function PublishedTender () {



    return (
        <div className='publish-container'>
            <div className='publish-navigation'>

            </div>

            <div className='publish-content'>

               <h1><b>Publish a Tender</b></h1> 

                <form className='publish-form'>

                <div className='row'>

                    <div className='col-md-6'>

                        <div className='tender-group'>
                             <span> Tender Names </span>
                            <input type="text" id="tender-name" value=""/>
                        </div>

                        <div className='tender-group'>
                             <span> Company Email </span>
                            <input type="email" id="tender-email" value="" />
                        </div>

                        <div className='tender-group'>
                            <span>  Company Address </span>
                              <input type="text" id="tender-address" value="" />
                        </div>

                        <div className='tender-group'>
                                <span>  Timeline From </span>
                                <input type="date" id="tender-date" value="" />
                        </div>

                        <div className='tender-group'>
                         <span>  Application Deadline </span>
                        <input type="date" id="tender-date" value="" />
                         </div>

                       
                    </div>

                    <div  className=' col-xs-12 col-md-6'>
                        
                        <div className='tender-group'>
                            <span> Tender Category </span>
                            <input type="text" id="tender-category" value=""/>
                        </div>
                        <div className='tender-group'>
                            <span> Tender Budget </span>
                            <input type="number" id="tender-budget" value="" />
                        </div>
                        <div className='tender-group'>
                            <span>  Company Telephone </span>
                            <input type="number" id="tender-phone" value="" />
                        </div>

                        <div className='tender-group'>
                        <span>  Budget ($) </span>
                        <input type="number" id="tender-budget" value="" />
                        </div>

                        <div className='tender-group'>
                         <span>  Tender Description </span>
                        <input type="text" id="tender-description" value="" />
                        </div>
                    </div>

                    <div className='col-md-12'>
                            <button>Submit Tender</button>

                    </div>
                    

                </div>




                </form>

                


            </div>


        </div>
    )


}

export default PublishedTender;