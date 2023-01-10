import React from 'react'
import landingimg from '../assets/landingimg2.png'
import { FaClock, FaBolt, FaCheckDouble } from "react-icons/fa";
import {GrDocumentPerformance} from "react-icons/gr";

function Landing() {
  return (
    <div>
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
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
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
    </div>
  )
}

export default Landing