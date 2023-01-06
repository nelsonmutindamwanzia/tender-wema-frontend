import React, { useEffect, useState } from "react";

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/suppliers")
            .then((response) => response.json())
            .then((data) => setSuppliers(data));
    }, []);

    return (
        <div>
            <h5>Suppliers</h5>
            {suppliers.map((supplier) => {
                return (
                    <div className="card">
                        <h5 className="card-header">{supplier.company_name} </h5>
                        <div className="card-body">
                            <p className="card-title">Company Email: {supplier.email} </p>
                            <p className="card-text">Company Telephone: {supplier.company_telephone}</p>
                            <p className="card-text">Company Address: {supplier.company_address}</p>
                            <a href="#" className="btn btn-primary">view</a>
                        </div>
                    </div>

                    // <div className="card">
                    //     <div className="card-body">
                    //         <h5 className="card-title">{supplier.company_name}</h5>
                    //     </div>
                    //     <ul className="list-group list-group-flush">
                    //         <li className="list-group-item">Company Email: {supplier.email}</li>
                    //         <li className="list-group-item">Company Telephone: {supplier.company_telephone}</li>
                    //         <li className="list-group-item">{supplier.company_address}</li>
                    //     </ul>
                    //     <div className="card-body">
                    //         {/* <a href="#" class="card-link">View</a> */}
                    //     </div>
                    // </div>


                )

            })}
        </div>
    )

}
export default Suppliers;