import React from "react";
import { Alert } from "reactstrap";

const PackageCreationSuccessPage = () => {

    return (
        <div style={{ marginTop: "100px", marginLeft: "200px", marginRight: "200px" }}>
            <Alert>
                <h4 className="alert-heading" style={{ textAlign: "center" }}>
                    Package created successfully!
                </h4>
                <p style={{ fontSize: "14px" , textAlign: "center"}}>
                    Aww yeah!!, you successfully Created Pacakge. Thank you for using Concordia Travels.
                </p>
                <hr />
            </Alert>
        </div>
    );
};
export default PackageCreationSuccessPage;