import React, { useEffect, useState } from "react";

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
                                    <div className="card-body" key={tender.id} >
                                        <h6 className="card-title">{tender.tender_name} </h6>
                                        <p className="card-text">Tender Category: <span>{tender.tender_category}</span></p>
                                        <p className="card-text">Tender Budget: <span>{tender.budget}</span></p>
                                        <p className="card-text">Timeline: <span>{tender.timeline}</span></p>
                                        <p className="card-text">Application Deadline: <span>{tender.application_deadline}</span></p>
                                        <Link to={`/tenders/${tender.id}`} ><span class="badge bg-primary">View</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )

                })}
            </div>

        </div>
    )
}
export default Tenders;
