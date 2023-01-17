import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";
import '../supplierProfiles/supplier.css';

function Tenders() {
    const [tenders, setTenders] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch(`https://tender-wema-production.up.railway.app/tenders`)
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
                <div className="tenders-cards-container" >
                    {tenders.map((tender) => {
                        return (
                            <div>
                                <div className="tenders-card" key={tender.id} >
                                    <h5>{tender.tender_name} </h5>
                                    <h6>Tender Category: <strong>{tender.tender_category}</strong></h6>
                                    <h6>Tender Budget: <strong>{tender.budget}</strong></h6>
                                    <h6>Timeline: <strong>{tender.timeline}</strong></h6>
                                    <h6>Application Deadline: <strong> {tender.application_deadline}</strong></h6>
                                    {/* <p>Description: {tender.tender_description}</p> */}
                                    <Link to={`/tenders/${tender.id}`} ><span class="badge bg-primary">View Tender</span></Link>
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
