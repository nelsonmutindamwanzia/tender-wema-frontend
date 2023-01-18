import React, { useState } from "react";
import { useNavigate } from "react-router";

function SubmitProposal({ tenderId }) {
    const [kra_pin, setKra_pin] = useState("");
    const [company_license, setCompany_license] = useState("");
    const [bank_statements, SetBank_statements] = useState("");
    const [tax_compliance, SetTax_compliance] = useState("");
    const [council_registration, SetCouncil_registration] = useState("");
    const [supplier_name, setSupplier_name] = useState("");
    const [proposal, setProposal] = useState([]);
    const navigate = useNavigate();


    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "e2e6z2lx");
        fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setCompany_license(data.secure_url);
                SetBank_statements(data.secure_url);
                SetTax_compliance(data.secure_url);
                SetCouncil_registration(data.secure_url);
            });
    };

    const createProposal = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/proposals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tender_id: tenderId,
                kra_pin: kra_pin,
                company_license: company_license,
                bank_statements: bank_statements,
                tax_compliance: tax_compliance,
                council_registration: council_registration,

            }),
        })
            .then((response) => response.json())
            setTimeout(() => {
                navigate("/bidtenders");
            }, 1000)
    };

    return (
        <div>
            <h4>Submit Proposal</h4>

            
            <label for="fname">Supplier Name:</label><br></br>
            <input
                type="text"
                placeholder="supplier name"
                // value={tender.supplier_name}
                onChange={(e) => setSupplier_name(e.target.value)}
            />
            <div>
                <label for="fname">KRA PIN:</label><br></br>
                <input
                    type="text"
                    placeholder="KRA PIN"
                    value={kra_pin}
                    onChange={(e) => setKra_pin(e.target.value)}
                />
            </div>

            <div>
                <label for="fname">Company License:</label><br></br>
                <input
                    type="file"
                    id="file-selector"
                    file={company_license}
                    onChange={(e) => {
                        uploadImage(e.target.files);
                    }}
                />
            </div>

            <div>
                <label for="fname">Bank Statement:</label><br></br>
                <input
                    type="file"
                    id="file-selector"
                    file={bank_statements}
                    onChange={(e) => {
                        uploadImage(e.target.files);
                    }}
                />
            </div>

            <div>
                <label for="fname">Tax Compliance:</label><br></br>
                <input
                    type="file"
                    id="file-selector"
                    onChange={(e) => {
                        uploadImage(e.target.files);
                    }}
                />
            </div>

            <div>
                <label for="fname">Counsil Registration:</label><br></br>
                <input
                    type="file"
                    id="file-selector"
                    file={council_registration}
                    onChange={(e) => {
                        uploadImage(e.target.files);
                    }}
                />
            </div>

            <div>
                <button
                    className="my-2 btn btn-primary"
                    type="submit"
                    onClick={createProposal}
                >
                    Submit Proposal
                </button>
            </div>

        </div>
    )

}
export default SubmitProposal;