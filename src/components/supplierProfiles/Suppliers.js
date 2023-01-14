import React, { useEffect, useState } from "react";
import "./supplier.css";
//import SupSearchBar from "./SupSearchBar";

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    // const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch("https://tender-wema-production.up.railway.app/suppliers")
            .then((response) => response.json())
            .then((data) => {
                if (!filterQuery) {
                    setSuppliers(data);
                }
                else {
                    setSuppliers(
                        data.filter((supplier) =>
                            supplier.company_name.toLowerCase().includes(filterQuery.toLowerCase()))
                    )
                }
            });
    }, [filterQuery]);

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    // };

    // if (searchInput.length > 0) {
    //     suppliers.filter((supplier) => {
    //         return supplier.company_name.match(searchInput);
    //     });
    // }



    return (
        <div className="supplier-page" >
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

            {/* <input
                type="text"
                placeholder="Search here"
                onChange={handleSearch}
                value={searchInput} /> */}

            <br></br>

            <h5>Supplier Profiles</h5>
            <div className="supplier-cards-container" >
                {suppliers.map((supplier) => {
                    return (
                        <div className="box-card">
                            <div className="supplier-card" key={supplier.id} >
                                <h6> {supplier.company_name} </h6>
                                <p>Email: {supplier.email}</p>
                                <p>Telephone: {supplier.company_telephone}</p>
                                <p>Address: {supplier.company_address}</p>
                                {/* <span class="badge bg-primary">View</span> */}
                            </div>
                        </div>

                    )

                })}
            </div>
        </div>

    )

}
export default Suppliers;