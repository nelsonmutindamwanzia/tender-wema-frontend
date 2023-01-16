import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SupplierSideBar from "../supplierProfiles/SupplierSideBar";

function EachTender() {
    const params = useParams();
    const [tenders, setTenders] = useState([]);
    const [proposals, setProposals] = useState([]);
    const [tender_description, setTender_description] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/tenders`)
        .then((response) => response.json)
        .then((data) => {
            setTenders(data);
        })
    });

    const showEachTender = tenders.map(
        (tender) => 
        tender.id === parseInt(params.id) && (
            <div>
                <div>                
                    <p>Description: {tender.tender_description}</p>
                </div>
                <div>
                    <h6>Proposals recieved</h6>
                    <div>
                        {tender.proposals}
                    </div>
                </div>
            </div>
        )
    );

    return (
        <div>
            <SupplierSideBar />
            {showEachTender}
        </div>
    )
}
export default EachTender