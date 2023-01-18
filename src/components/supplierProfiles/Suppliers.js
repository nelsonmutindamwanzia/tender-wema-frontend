import React, { useEffect, useState } from "react";
import "./supplier.css";
import SupplierSideBar from "./SupplierSideBar";
import { FaSearch } from "react-icons/fa"
import Footer from "../Footer";
import { Link } from "react-router-dom";
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
        <>
            <SupplierSideBar />
            <div className="supplier-page" >
                <br /><br />
                <div class="search" >
                    <FaSearch style={{
                        color: "#5A96F9",
                    }} />
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

                <br />

                <h5>Supplier Profiles</h5>
                <div className="supplier-cards-container" >
                    {suppliers.map((supplier) => {
                        return (
                            <div className="box-card">
                                <div className="supplier-card" key={supplier.id} >
                                    <h5> {supplier.company_name} </h5>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Email:</td>
                                                <td>{supplier.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Telephone:</td>
                                                <td>{supplier.company_telephone}</td>
                                            </tr>
                                            <tr>
                                                <td>Address:</td>
                                                <td>{supplier.company_address}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="btnholder">
                                        <Link to={`/suppliers/${supplier.id}`} ><span class="btn" id="submittender">View Supplier</span></Link>
                                    </div>

                                </div>

                            </div>

                        )

                    })}
                </div>
            </div>
            <Footer />
        </>
    )

}
export default Suppliers;