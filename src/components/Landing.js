import React from 'react'
import '../styles/landnnav.css'
import landingimg from '../assets/landingimg2.png'
import aboutus1 from '../assets/aboutus1.png'
import aboutus3 from '../assets/aboutus3.png'
import { FaClock, FaBolt, FaCheckDouble } from "react-icons/fa";
import {GrDocumentPerformance} from "react-icons/gr";
import Navi from './Navi'
import Footer from './Footer'

function Landing() {
  return (
      <div>
        <Navi/>
        <div className='container-fluid' id='landing-page'>
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-sm-12 col-xl-6'>
                    <br/> <br/> <br/>
                    <h1 className='landing-header'>Tendering <GrDocumentPerformance size={60} /> Made Easier</h1>
                    <p className='landing-text'>Smart, Easy and Efficient Tendering Processes</p>
                    <br/>
                    {/* trigger modal */}
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Learn More...</button> 
                    {/* modal */}
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">About Us</h1>
                                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div class="modal-body">
                                <div className='about'>
                                    <div className="projcard-container">
            
                                        <div className="projcard projcard-blue">
                                            <div className="projcard-innerbox">
                                            <img className="projcard-img" src={aboutus1} alt='pic one on aboutus'/>
                                            <div className="projcard-textbox">
                                                <div className="projcard-title">About the Platform</div>
                                                {/* <div className="projcard-subtitle">Lorem Ipsum dolor</div> */}
                                                <div className="projcard-bar"></div>
                                                <div className="projcard-description">
                                                    Tender Wema is a leading and user-friendly tender management system which assist in the process of planning, selecting and publishing bids on tenders efficiently, keeping a transparent and clear audit trail which can be used to determing the best contracts
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="projcard projcard-red">
                                            <div className="projcard-innerbox">
                                            <img className="projcard-img" src={aboutus3} alt='pic two on aboutus'/>
                                            <div className="projcard-textbox">
                                                <div className="projcard-title">Main goals</div>
                                                <div className="projcard-bar"></div>
                                                <div className="projcard-description">
                                                         To make sure that work and projects are awarnded fairly and through a transparent process to the best applicant; whether a sole trader or a company. 
                                                </div>
                                            </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12 col-xl-6'>
                    
                    <img className='img-fluid' src={landingimg} alt='landing-page-img' />
                </div>
            </div>
            <br/>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <div className='col'>
                    <div className="card">
                            <div className="card-body">
                                <p className='card-icon'> <FaBolt/> </p>
                                <h5 className="card-title">Smart</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card">
                            <div className="card-body">
                                <p className='card-icon'> <FaClock/> </p>
                                <h5 className="card-title">Efficient</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                    </div>
                </div><div className='col'>
                    <div className="card">
                            <div className="card-body">
                                <p className='card-icon'> <FaCheckDouble/> </p>
                                <h5 className="card-title">Transparent</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing