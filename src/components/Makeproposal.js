import React from 'react'
import '../styles/publishtender.css'
import { FaClock, FaBolt, FaCheckDouble } from "react-icons/fa";
import {GrDocumentPerformance} from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Navi';
import Footer from './Footer';


function PublishedTender () {



    return (
        
        <div className='publish-container'>
            <div className='publish-navigation'>

                Dyes junior 
                

            </div>

            <Navi/>
            <div className='publish-content'>
                <div className="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="Search" aria-label="Search" />
                </div>

               <h1> Make a proposal </h1> 

                <form className='publish-form'>
                    {/* <h4 style="text-align:center;"> Crown Plaza Tender Proposal</h4> */}

                <div className='row'>

                    <div className='col-md-6'>

                        <div className='tender-group'>
                             <span> Tender id </span>
                            <input type="text" id="tender-name" />
                        </div>

                        <div className='tender-group'>
                             <span> Proposal Name </span>
                            <input type="email" id="tender-email" />
                        </div>

                        <div className='tender-group'>
                            <span>  Bank Statement </span>
                              <input type="file" id="tender-address" />
                        </div>

                        <div className='tender-group'>
                                <span>  Tax Compliance </span>
                                <input type="file" id="tender-date" />
                        </div>

                        {/* <div className='tender-group'>
                         <span>  Application Deadline </span>
                        <input type="date" id="tender-date" value="" />
                         </div> */}

                       
                    </div>

                    <div  className=' col-xs-12 col-md-6'>
                        
                        <div className='tender-group'>
                            <span> KRA pin </span>
                            <input type="text" id="tender-category"/>
                        </div>
                        <div className='tender-group'>
                            <span> Company licence </span>
                            <input type="number" id="tender-budget" />
                        </div>
                        <div className='tender-group'>
                            <span>  Council Registration </span>
                            <input type="number" id="tender-phone" />
                        </div>

                        <div className='tender-group'>
                        <span>  Proposal Amaount ($) </span>
                        <input type="number" id="tender-budget" />
                        </div>

                        {/* <div className='tender-group'>
                         <span>  Tender Description </span>
                        <input type="text" id="tender-description" value="" />
                        </div> */}
                    </div>

                   

                    <div className='col-md-12'>
                            <button>Submit Proposal</button>
                    </div>
                    
                        <Footer/>
                </div>




                </form>

                


            </div>


        </div>
    )


}

export default PublishedTender;