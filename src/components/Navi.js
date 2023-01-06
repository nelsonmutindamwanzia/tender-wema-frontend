import React from 'react'
import {GrDocumentPerformance} from "react-icons/gr";


function Navi() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <span className='tender-logo'> <GrDocumentPerformance/> &nbsp; </span>
            <a className="navbar-brand" href="#">Tender Wema</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" id='active' aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">About Us</a>
                <a className="nav-link" href="#">Tenders</a>
                <a className="nav-link disabled">Sign Up</a>
                <a className="nav-link disabled">Login</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navi