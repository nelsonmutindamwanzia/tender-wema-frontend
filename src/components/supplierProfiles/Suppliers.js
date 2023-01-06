import React, { useEffect, useState } from "react";

function Suppliers () {
    const [suppliers, setSuppliers] = useState([]);

    useEffect (() => {
        fetch("http://127.0.0.1:3000/suppliers")
        .then((response) => response.json())
        .then((data) => setSuppliers(data));
    }, []);
}
export default Suppliers;