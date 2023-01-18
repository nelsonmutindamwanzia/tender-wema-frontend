import React from 'react'
import {GrDocumentPerformance} from "react-icons/gr";
import aboutus1 from '../assets/aboutus1.png'
import aboutus3 from '../assets/aboutus3.png'
import '../index.css'



function Navi() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <span className='tender-logo'> <GrDocumentPerformance/> &nbsp; </span>
            <a className="navbar-brand" href="/">Tender Wema</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" id='active' aria-current="page" href="/">Home</a>
                {/* trigger about us modal */}
                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">About Us</a>
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
                                            <img className="projcard-img" src={aboutus1}/>
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
                                            <img className="projcard-img" src={aboutus3}/>
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
                <a className="nav-link" href="/signup">Sign Up</a>
                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/tenderer-login">Tenderer Login</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navi