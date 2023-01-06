import React from 'react'
import {GrDocumentPerformance} from "react-icons/gr";


function Footer() {
  return (
    <div>
        <footer>
            <br/>
            <div className='container-fluid' id='footer'>
                <div className='row'>
                    <div className='col-md-4 col-lg-4 col-sm-12 col-xl-4'>
                        <p>  <GrDocumentPerformance/>  &nbsp; Tender Wema</p>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-12 col-xl-4'>
                         <p>Copyright 2022. TenderWema</p>
                    </div>
                    <div className='col-md-4 col-lg-4 col-sm-12 col-xl-4'>
                        <ul>
                                    <li> FB</li>
                                    <li>lN</li>
                                   <li>TW</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>    
    </div>
  )
}

export default Footer