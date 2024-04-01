import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import '../csscomponents/flightDetails.css';
import { useParams } from 'react-router-dom';
import base_url from "../api/bootapi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FlightDetails = () => {
    const [flight, setFlight] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchFlightDetails = async () => {
            try {
                const response = await axios.get(`${base_url}/flights/${id}/`);
                setFlight(response.data);
            } catch (error) {
                console.log("Failed to fetch flight details:", error);
            }
        };

        if (id) {
            fetchFlightDetails();
        }
    }, [id]);

    if (!flight) {
        return <div>No flight details provided.</div>;
    }

    const handleFlightBookNow = () => {
        const bookingInfo = {
            flight : flight? flight.airlines + ' from ' + flight.departure_city + ' to ' + flight.destination_city : 'No flight in this package',
            totalCost : Number(flight.price)
        };
        navigate('/book', { state: bookingInfo });
    };

    return (
        <div>
            <h4 className="flight-details-heading">Flight Details</h4>
            <Card className="flight-details-card">
                <CardImg
                    alt="Flight image"
                    src="https://picsum.photos/900/180" // Placeholder image
                    style={{ height: 180 }}
                    top
                />
                <CardBody>
                    <div className="flight-name-container">
                        <CardTitle tag="h5">
                            {flight.airlines}
                        </CardTitle>
                        <Button color="primary" onClick={handleFlightBookNow}>Book Now</Button>
                    </div>
                    <CardText>
                        <p>Departure City: {flight.departure_city}</p>
                        <p>Destination City: {flight.destination_city}</p>
                        <p>Departure Date: {flight.departure_date}</p>
                        <p>Arrival Date: {flight.arrival_date}</p>
                        <p>Departure Time: {flight.departure_time}</p>
                        <p>Arrival Time: {flight.arrival_time}</p>
                        <p>Price: {flight.price}</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default FlightDetails;