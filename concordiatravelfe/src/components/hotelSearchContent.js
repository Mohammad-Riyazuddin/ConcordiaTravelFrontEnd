import React , { useState, useEffect } from "react";
import HotelData from "./hotelData";
import '../csscomponents/hotelSearchContent.css';
import base_url from "../api/bootapi";
import axios from "axios";

const HotelSearchContent = () => {

    const getAllhotels = () => {
        axios.get(`${base_url}/hotels/`).then(
            (response) => {
                console.log(response);
                setHotelData(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const [hotelData, setHotelData] = useState([
        // { name : "Hilton", city : "Delhi", price : 5000},
        // { name : "Hilton", city : "Montreal", price : 5000},
        // { name : "Hilton", city : "India", price : 5000},
        // { name : "Hilton", city : "Chennai", price : 5000},
        // { name : "Hilton", city : "Mumbai", price : 5000}
    ]);

    useEffect(() => {
        getAllhotels();
    },[])

    return (
        <div className="hotel-search-Results">
            {
                hotelData.length > 0 
                ? hotelData.map((item) => <HotelData hotels={item} />)
                : <p>No hotels found</p>
            }
        </div>
    );
}

export default HotelSearchContent;