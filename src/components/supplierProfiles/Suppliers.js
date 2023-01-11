import React, { useEffect, useState } from "react";
import "./supplier.css";
//import SupSearchBar from "./SupSearchBar";

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [filterQuery, setFilterQuery] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/suppliers")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setSuppliers(data);
                }
                else {
                    setSuppliers(
                        data.filter((supplier) =>
                            supplier.name.toLowerCase().includes(filterQuery.toLowerCase()))
                    )
                }
            });
    }, [filterQuery]);

    return (
        <div className="supplier-container" >
            {/* <SupSearchBar /> */}
            <br></br>
            <input
                type="text"
                placeholder="Search Supplier"
                onChange={(e) => {
                    setFilterQuery(e.target.value);
                    console.log(filterQuery);
                }}
                className="form-control mb-4"
            />
            
            <h5>Supplier Profiles</h5>
            <div className="cards-container" >
                {suppliers.map((supplier) => {
                    return (
                        // <div className="card">
                        //     <h5 className="card-header">{supplier.company_name} </h5>
                        //     <div className="card-body">
                        //         <p className="card-text">Company Email: <span>{supplier.email}</span> </p>
                        //         <p className="card-text">Telephone: {supplier.company_telephone}</p>
                        //         <p className="card-text">Address:   {supplier.company_address}</p>
                        //         <a href="#" className="btn btn-primary">view</a>
                        //     </div>
                        // </div>

                        <div className='row row-cols-1 row-cols-md-3 g-4'>
                            <div className='col'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{supplier.company_name} </h5>
                                        <p className="card-text">Email: <span>{supplier.email}</span></p>
                                        <p className="card-text">Telephone: <span>{supplier.company_telephone}</span></p>
                                        <p className="card-text">Address: <span>{supplier.company_address}</span></p>
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
export default Suppliers;