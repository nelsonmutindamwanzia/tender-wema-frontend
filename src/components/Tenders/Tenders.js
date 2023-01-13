import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";
import '../supplierProfiles/supplier.css';

function Tenders() {
    const [tenders, setTenders] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/tenders`)
            .then((response) => response.json())
            .then((data => {
                if (!filterQuery) {
                    setTenders(data);
                }
                else {
                    setTenders(
                        data.filter((tender) =>
                            tender.tender_name.toLowerCase().includes(filterQuery.toLowerCase()))
                    )
                }
            }))
    }, [filterQuery])

    return (
        <div>
            <SupplierSideBar />
        <div className="tenders-container">            
            <br></br>
            <div class="search" >
                <i class="fa fa-search"></i>
                <input
                    type="text"
                    placeholder="Search Supplier"
                    onChange={(e) => {
                        setFilterQuery(e.target.value);
                        console.log(filterQuery);
                    }}
                    className="form-searchbar"
                />
            </div>
            <br></br>
            <h5>All Tenders</h5>
            <div className="cards-container" >
                {tenders.map((tender) => {
                    return (
                        <div className='row row-cols-1 row-cols-md-3 g-4'>
                            <div className='col'>
                                <div className="card">
                                    <div className="card-tender" key={tender.id} >
                                        <h6 className="card-title">{tender.tender_name} </h6>
                                        <p className="card-text">Tender Category: {tender.tender_category}</p>
                                        <p className="card-text">Tender Budget: {tender.budget}</p>
                                        <p className="card-text">Timeline: {tender.timeline}</p>
                                        <p className="card-text">Application Deadline: {tender.application_deadline}</p>
                                        <p className="card-text">Description: {tender.tender_description}</p>
                                        <Link to={`/tenders/${tender.id}`} ><span class="badge bg-primary">View</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )

                })}
            </div>

        </div>
        </div>
    )
}
export default Tenders;
