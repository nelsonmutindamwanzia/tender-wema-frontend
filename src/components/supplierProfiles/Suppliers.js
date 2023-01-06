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
                    <div class="card">
                        <h5 class="card-header">{supplier.company_name} </h5>
                        <div class="card-body">
                            <p class="card-title">Company Email: {supplier.email} </p>
                            <p class="card-text">Company Telephone: {supplier.company_telephone}</p>
                            <p class="card-text">Company Address: {supplier.company_address}</p>
                            {/* <a href="#" class="btn btn-primary">view</a> */}
                        </div>
                    </div>
                )

            })}
        </div>
    )

}
export default Suppliers;