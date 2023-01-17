import React from 'react'
import '../styles/Tender-Result.css'
// import { FaClock, FaBolt, FaCheckDouble } from "react-icons/fa";
// import {GrDocumentPerformance} from "react-icons/gr";
// import 'bootstrap/dist/css/bootstrap.min.css';


function ActiveTenders () {
    return (
        <div className='publish-container'>
            <div className='publish-navigation'>

                Tender
                

            </div>

            <div className='publish-content'>
                

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


                  <div className='single-tender'>
      <h5>  Pata Ng'ombe Tender</h5>
      <table className='table table-borderless'>
          <tr>
              <td>Tender ID  </td>
              <td>01/2022  </td>
           </tr>
      
          <tr>
           <td> Budget  </td>
          <td>  $ 5000 - $ 10,000 </td>
              </tr>
              <tr>
               <td> Timeline </td>
               <td> Jun 22 - Nov 22 </td>
              </tr>
              <tr>
                  <td>Application Deadline </td>
                  <td className='text-success'> Oct 2022</td>
              </tr>
      </table>
      <button> View</button>
  </div>    


              <div className='single-tender'>
      <h5> School Chairs Tender</h5>
      <table className='table table-borderless'>
          <tr>
              <td>Budget  </td>
              <td>01/2022  </td>
           </tr>
      
          <tr>
           <td> Budget </td>
          <td>  $ 2500 - $ 5000</td>
              </tr>
              <tr>
               <td> Timeline </td>
               <td> Feb 22 - Sept 22 </td>
              </tr>
              <tr>
                  <td>Application Deadline</td>
                  <td className='text-success'> Sept 2022</td>
              </tr>
      </table>
      <button> View</button>
        </div>                

            </div>

            </div>



        </div>
    )


}

export default ActiveTenders;