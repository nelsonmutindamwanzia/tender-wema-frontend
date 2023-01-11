import React, { useEffect, useState } from "react";
import "./supplier.css";
//import SupSearchBar from "./SupSearchBar";

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [filterQuery, setFilterQuery] = useState("")
    const [searchInput, setSearchInput] = useState("");

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
        <div className="supplier-container" >
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

            <br></br><br></br>

            <h5>Supplier Profiles</h5>
            <div className="cards-container" >
                {suppliers.map((supplier) => {
                    return (
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