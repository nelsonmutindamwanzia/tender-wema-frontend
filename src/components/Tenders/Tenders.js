import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";
import '../supplierProfiles/supplier.css';
import { FaSearch } from "react-icons/fa"
import Footer from "../Footer";


function Tenders() {
    const [tenders, setTenders] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/tenders`)
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
                <br /><br />
                <div className="search" >
                    <FaSearch style={{
                        color: "#5A96F9",
                    }} />
                    <input
                        type="text"
                        placeholder="Search Supplier"
                        onChange={(e) => {
                            setFilterQuery(e.target.value);
                            console.log(setFilterQuery);
                        }}
                        className="form-searchbar"
                    />
                </div>
                <br></br>

                <h5>All Tenders</h5>
                <div className="tenders-cards-container" >
                    {tenders.map((tender) => {
                        const timeline = new Date(tender.timeline).toLocaleString('en-GB', { timeZone: 'EAT' })
                        const deadline = new Date(tender.application_deadline).toLocaleString('en-GB', { timeZone: 'EAT' })
                        return (
                            <div>
                                <div className="tenders-card" key={tender.id} >
                                    <h5>{tender.tender_name} </h5>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Tender Category</td>
                                                <td>{tender.tender_category}</td>
                                            </tr>
                                            <tr>
                                                <td>Tender Budget:</td>
                                                <td>{tender.budget}</td>
                                            </tr>
                                            <tr>
                                                <td>Timeline:</td>
                                                <td>{timeline}</td>
                                            </tr>
                                            <tr>
                                                <td>Application Deadline:</td>
                                                <td> {deadline}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="btnholder">
                                        <Link to={`/tenders/${tender.id}`} ><span class="btn" id="submittender">View Proposals</span></Link>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Tenders;
