import React, { useEffect, useState } from "react";
import "./supplier.css";
//import SupSearchBar from "./SupSearchBar";

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/suppliers")
            .then((response) => response.json())
            .then((data) => setSuppliers(data));
    }, []);

    return (
        <div className="supplier-container" >
            {/* <SupSearchBar /> */}
            <br></br>
            <h5>Supplier Profiles</h5>
            <div className="cards-container" >               
                {suppliers.map((supplier) => {
                    return (
                        <div className="card">
                            <h5 className="card-header">{supplier.company_name} </h5>
                            <div className="card-body">
                                <p className="card-text">Company Email: <span>{supplier.email}</span> </p>
                                <p className="card-text">Telephone: {supplier.company_telephone}</p>
                                <p className="card-text">Address:   {supplier.company_address}</p>
                                <a href="#" className="btn btn-primary">view</a>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>

    )

}
export default Suppliers;