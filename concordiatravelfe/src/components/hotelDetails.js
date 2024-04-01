import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import '../csscomponents/hotelDetails.css'; // Adjust the import path as necessary
import { useParams } from 'react-router-dom';
import base_url from "../api/bootapi";
import axios from 'axios'; 

const HotelDetails = () => {
    const [hotel, setHotel] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchHotelDetails = async () => {
            try {
                const response = await axios.get(`${base_url}/hotels/${id}/`);
                setHotel(response.data);
            } catch (error) {
                console.log("Failed to fetch hotel details:", error);
            }
        };

        if (id) {
            fetchHotelDetails();
        }
    }, [id]);

    if (!hotel) {
        return <div>No hotel details provided.</div>;
    }

    return (
        <div>
            <h4 className="hotel-details-heading">Hotel Details</h4>
            <Card className="hotel-details-card">
                <CardImg
                    alt="Hotel image"
                    src="https://picsum.photos/900/180" // Placeholder image
                    style={{ height: 180 }}
                    top
                />
                <CardBody>
                    <div className="hotel-name-container">
                        <CardTitle tag="h5">
                            {hotel.name}
                        </CardTitle>
                        <Button color="primary">Book Now</Button>
                    </div>
                    <CardText>
                        <p>Location: {hotel.location}</p>
                        <p>Price: {hotel.price}</p>
                    </CardText>
                    <Button color="primary">Book Now</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default HotelDetails;