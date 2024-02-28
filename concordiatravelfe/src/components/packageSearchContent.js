import React, { useState,useEffect } from "react";
import PackageData from "./packagedata";
import '../csscomponents/packageSearchContent.css';
import base_url from "../api/bootapi";
import axios from "axios";

const PackageSearchContent = () => {

    //funtion to call server
    const getAllPackages = () => {
        axios.get(`${base_url}/packages/`).then(
            (response) => {
                console.log(response);
                setPackageData(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    //calling loading packages function
    useEffect(() => {
        getAllPackages();
    },[]);

    const [packageData, setPackageData] = useState([
        // { name: "Goa Holiday Trip", city: "Goa, India", price: 5000, days: 7 },
        // { name: "Maldives Holiday Trip", city: "Maldives, Maldives", price: 5000, days: 7 },
        // { name: "Hawaii Holiday Trip", city: "Hawaii , USA", price: 5000, days: 7 },
        // { name: "Miami Holiday Trip", city: "Miami, USA", price: 5000, days: 7 },
        // { name: "Las Vegas Holiday Trip", city: "Las Vegas, USA", price: 5000, days: 7 },
        // { name: "Toronto Holiday Trip", city: "Toronto, Canada", price: 5000, days: 7 }
    ]);

    return (
        <div>
            <h4 className="featured-packages">Featured Packages</h4>
            <div className="package-search-Results">
                {
                    packageData.length > 0
                        ? packageData.map((packagi) => <PackageData key={packagi.id} packages={packagi} />)
                        : <p>No packages found</p>
                }
            </div>
        </div>

    );
}

export default PackageSearchContent;