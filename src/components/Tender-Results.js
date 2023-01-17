import React from 'react'
import '../styles/Tender-Result.css'
// import { FaClock, FaBolt, FaCheckDouble } from "react-icons/fa";
// import {GrDocumentPerformance} from "react-icons/gr";
// import 'bootstrap/dist/css/bootstrap.min.css';


function TenderResult () {
    return (
        <div className='publish-container'>
            <div className='publish-navigation'>

                Tender
                

            </div>

            <div className='publish-content'>
                

               <h2> Tender Results </h2> 

               <div className='results-container'>

                <div className='single-tender'>

                    <h5> Crown Plaza Tender</h5>

                    <table className='table table-borderless'>

                        <tr>
                            <td>Tender ID  </td>
                            <td>01/2022  </td>
                         </tr>
                    
                        <tr>
                         <td> Proposal Amount  </td>
                        <td>  $ 5000 </td>
                            </tr>

                            <tr>
                             <td> Proposal Score </td>
                             <td> 95% </td>
                            </tr>

                            <tr>
                                <td>Status</td>
                                <td className='text-success'> Awarded</td>
                            </tr>
 
                    </table>

                    <button> View</button>



                </div>       


                  <div className='single-tender'>
      <h5> Crown Plaza Tender</h5>
      <table className='table table-borderless'>
          <tr>
              <td>Tender ID  </td>
              <td>01/2022  </td>
           </tr>
      
          <tr>
           <td> Proposal Amount  </td>
          <td>  $ 5000 </td>
              </tr>
              <tr>
               <td> Proposal Score </td>
               <td> 95% </td>
              </tr>
              <tr>
                  <td>Status</td>
                  <td className='text-success'> Awarded</td>
              </tr>
      </table>
      <button> View</button>
  </div>    


              <div className='single-tender'>
      <h5> Crown Plaza Tender</h5>
      <table className='table table-borderless'>
          <tr>
              <td>Tender ID  </td>
              <td>01/2022  </td>
           </tr>
      
          <tr>
           <td> Proposal Amount  </td>
          <td>  $ 5000 </td>
              </tr>
              <tr>
               <td> Proposal Score </td>
               <td> 95% </td>
              </tr>
              <tr>
                  <td>Status</td>
                  <td className='text-success'> Awarded</td>
              </tr>
      </table>
      <button> View</button>
        </div>                

            </div>

            </div>



        </div>
    )


}

export default TenderResult;