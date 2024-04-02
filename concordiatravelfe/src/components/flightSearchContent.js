import React, { useState, useEffect } from "react";
import FlightData from "./flightData";
import base_url from "../api/bootapi";
import axios from "axios";

const FlightSearchContent = () => {

    const getAllflights = () => {
        axios.get(`${base_url}/flights/`).then(
            (response) => {
                console.log(response);
                setFlightData(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const [flightData, setFlightData] = useState(
        [
            // { airlines : "Air India", from_airport : "Delhi", to_airport : "Montreal" , departure_city : "Delhi", destination_city : "Montreal", departure_time: "8:30AM", arrival_time : "4:00PM", price : 5000},
            // { airlines : "Air Canada", from_airport : "Montreal", to_airport : "India" , departure_city : "Montreal", destination_city : "India", departure_time: "9:30AM", arrival_time : "5:00PM", price : 2000}
        ]
    );

    useEffect(() => {
        getAllflights();
    },[]);

    return (
        <div>
            <h4 style={{marginLeft: "200px", marginTop: "50px"}} className="featured-packages">Available Flights</h4>
            <div style={{marginLeft: "195px"}}>
            {
                flightData.length > 0 
                ? flightData.map((flight) => <FlightData flights={flight} />)
                : <p>No flights found</p>
            }
            </div>
        </div>
    );
}

export default FlightSearchContent;