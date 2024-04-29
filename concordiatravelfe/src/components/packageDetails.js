import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import '../csscomponents/packageDetails.css';
import base_url from "../api/bootapi";
import axios from 'axios'; // Import Axios
import { useNavigate, useParams } from 'react-router-dom';

const PackageDetails = () => {
    const [packageDetails, setPackageDetails] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPacakgeDetails = async () => {
            try{
                const response = await axios.get(`${base_url}/packages/${id}/`);
                setPackageDetails(response.data);
            } catch (error) {
                console.log("Failed to fetch package details:", error);
            }
        };

        if(id){
            fetchPacakgeDetails();
        }
    }, [id]);

    const handleBookNow = () => {
        const bookingInfo = {
            name : packageDetails.name,
            package_id : packageDetails.id,
            hotel : packageDetails.hotel? packageDetails.hotel.name : 'No hotel in this package',
            flight : packageDetails.flight? packageDetails.flight.airlines + ' from ' + packageDetails.flight.departure_city + ' to ' + packageDetails.flight.destination_city : 'No flight in this package',
            activities : packageDetails.activity? packageDetails.activity.name : 'No activities in this package',
            totalCost : Number(packageDetails.activity.price) + Number(packageDetails.flight.price) + Number(packageDetails.hotel.price)
        };
        navigate('/book', { state: bookingInfo });
    };


    if (!packageDetails) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    return (
        <div>
            <h4 className="package-details-heading">Package Details</h4>
            <div className="package-details">
                <Card className="my-2 package-details-card">
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/180"
                        style={{
                            height: 180
                        }}
                        top
                    />
                    <CardBody>
                        <div className="package-name-container">
                            <CardTitle tag="h5">
                                {packageDetails.name}
                            </CardTitle>
                            <Button color="primary" onClick={handleBookNow}>Book Now</Button> {/* "Book Now" button */}
                        </div>
                        <CardText>
                            {packageDetails.description}
                        </CardText>
                        <div className="details-container"> 
                            <CardText>
                                <h5>Flight Details</h5>
                                {packageDetails.flight ? (
                                    <>
                                        <p>Airlines: {packageDetails.flight.airlines}</p>
                                        <p>Destination City: {packageDetails.flight.destination_city}</p>
                                        <p>Arrival Date: {packageDetails.flight.arrival_date}</p>
                                        <p>Price: {packageDetails.flight.price}</p>
                                    </>
                                    ) : (
                                        <p>No flights added.</p>
                                )}
                            </CardText>
                            <CardText>
                                <h5>Hotel Details</h5>
                                {packageDetails.hotel ? (
                                    <>
                                        <p>Name: {packageDetails.hotel.name}</p>
                                        <p>Location: {packageDetails.hotel.location}</p>
                                        <p>Price: {packageDetails.hotel.price}</p>
                                    </>
                                    ) : (
                                        <p>No hotels added.</p>
                                )}
                            </CardText>
                            <CardText>
                                <h5>Activity Details</h5>
                                {packageDetails.activity ? (
                                    <>
                                        <p>Name: {packageDetails.activity.name}</p>
                                        <p>Description: {packageDetails.activity.description}</p>
                                        <p>Price: {packageDetails.activity.price}</p>
                                    </>
                                    ) : (
                                        <p>No activities added.</p>
                                )}
                            </CardText>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default PackageDetails;