import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import base_url from '../api/bootapi';

const CreatePackage = () => {

    const navigate = useNavigate();
    const [flight, setFlight] = useState({
        id: null,
        departure_city: '',
        destination_city: '',
        departure_date: '',
        arrival_date: '',
        airlines: '',
        price: 0,
    });
    const [hotel, setHotel] = useState({
        id: null,
        price: 0,
        name: '',
        location: '',
    });
    const [activity, setActivity] = useState({
        id: null,
        price: 0,
        name: '',
        description: '',
        location: '',
    });
    const [packageDetails, setPackageDetails] = useState({
        name: '',
        travel_duration: '',
        description: '',
        location: '',
        flight: null,
        hotel: null,
        activity: null,
        total_cost: 0,
    });

    const [addedItems, setAddedItems] = useState({
        flight: false,
        hotel: false,
        activity: false,
    });

    useEffect(() => {
        setPackageDetails(prevState => ({
            ...prevState,
            total_cost: Number(flight.price) + Number(hotel.price) + Number(activity.price),
        }));
    }, [flight, hotel, activity]);


    const handleFlightSubmit = async () => {
        try {
            // Assuming the backend expects the flight details in the request body
            const response = await axios.post(base_url + '/flights/', flight);

            // Check if the request was successful
            if (response.status === 201) { // Assuming 201 is the success status code
                console.log('Flight created successfully:', response.data);
                // Optionally, update the flight state with the response ID or any other relevant data
                setFlight({
                    id: response.data.id,
                    price: response.data.price,
                    airlines: response.data.airlines,
                    departure_city: response.data.departure_city,
                    destination_city: response.data.destination_city,
                    arrival_date: response.data.arrival_date
                }); // Example: updating with the returned ID
                console.log('Flight ID:', response.data.id);
                setAddedItems(prevState => ({
                    ...prevState,
                    flight: true,
                }))
            } else {
                console.error('Failed to create flight:', response.data);
            }
        } catch (error) {
            console.error('Error creating flight:', error);
        }
    };

    const handleHotelSubmit = async () => {
        try {
            // Assuming the backend expects the hotel details in the request body
            const response = await axios.post(base_url + '/hotels/', hotel);

            // Check if the request was successful
            if (response.status === 201) { // Assuming 201 is the success status code
                console.log('Hotel created successfully:', response.data);
                // Optionally, update the hotel state with the response ID or any other relevant data
                setHotel({
                    id: response.data.id,
                    price: response.data.price,
                    name: response.data.name,
                    location: response.data.location
                }); // Example: updating with the returned ID
                console.log('Hotel ID:', response.data.id);
                setAddedItems(prevState => ({
                    ...prevState,
                    hotel: true,
                }))
            } else {
                console.error('Failed to create hotel:', response.data);
            }
        } catch (error) {
            console.error('Error creating hotel:', error);
        }
    };

    const handleActivitySubmit = async () => {
        try {
            // Assuming the backend expects the activity details in the request body
            const response = await axios.post(base_url + '/activities/', activity);

            // Check if the request was successful
            if (response.status === 201) { // Assuming 201 is the success status code
                console.log('Activity created successfully:', response.data);
                // Optionally, update the activity state with the response ID or any other relevant data
                setActivity({
                    id: response.data.id,
                    price: response.data.price,
                    name: response.data.name,
                    description: response.data.description,
                    location: response.data.location
                }); // Example: updating with the returned ID
                console.log('Activity ID:', response.data.id);
                setAddedItems(prevState => ({
                    ...prevState,
                    activity: true,
                }))
            } else {
                console.error('Failed to create activity:', response.data);
            }
        } catch (error) {
            console.error('Error creating activity:', error);
        }
    };

    const handlePackageSubmit = async () => {
        try {
            console.log(flight.price, hotel.price, activity.price);
            const updatedPackageDetails = {
                ...packageDetails,
                flight: flight.id,
                hotel: hotel.id,
                activity: activity.id,
                total_cost: packageDetails.total_cost,
            };
            console.log(updatedPackageDetails);
            // Assuming the backend expects the package details in the request body
            const response = await axios.post(base_url + '/packages/', updatedPackageDetails);

            // Check if the request was successful
            if (response.status === 201) { // Assuming 201 is the success status code
                console.log('Package created successfully:', response.data);
                navigate('/packageCreationSuccessPage');
                
            } else {
                console.error('Failed to create package:', response.data);
            }
        } catch (error) {
            console.error('Error creating package:', error);
        }
    };

    const handleFlightDelete = () => {
        const flightDeleteResponse = axios.delete(`${base_url}/flights/${flight.id}/`);

        flightDeleteResponse.then((response) => {
            setAddedItems(prevState => ({
                ...prevState,
                flight: false,
            }))
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    };

    const handleHotelDelete = () => {

        const hotelDeleteResponse = axios.delete(`${base_url}/hotels/${hotel.id}/`);

        hotelDeleteResponse.then((response) => {
            setAddedItems(prevState => ({
                ...prevState,
                hotel: false,
            }))
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    };

    const handleActivityDelete = () => {
        const activityDeleteResponse = axios.delete(`${base_url}/activities/${activity.id}/`);

        activityDeleteResponse.then((response) => {
            setAddedItems(prevState => ({
                ...prevState,
                activity: false,
            }))
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    };





    return (
        <Container>
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center" }}>Create Package</h2>
                    {/* Flight Form */}
                    <Form style={{ marginLeft: "200px", marginRight: "200px" }}>
                        <h3>Flight</h3>
                        <FormGroup>
                            <Label for="airlines">Airlines</Label>
                            <Input type="text" name="airlines" id="airlines" onChange={(e) => setFlight({ ...flight, airlines: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="departureCity">Departure City</Label>
                            <Input type="text" name="departureCity" id="departureCity" onChange={(e) => setFlight({ ...flight, departure_city: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="departureAirport">Departure Airport</Label>
                            <Input type="text" name="departureAirport" id="departureAirport" onChange={(e) => setFlight({ ...flight, departure_airport: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="arrivalAirport">Arrival Airport</Label>
                            <Input type="text" name="arrivalAirport" id="arrivalAirport" onChange={(e) => setFlight({ ...flight, arrival_airport: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="destinationCity">Destination City</Label>
                            <Input type="text" name="destinationCity" id="destinationCity" onChange={(e) => setFlight({ ...flight, destination_city: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="departureDate">Departure Date</Label>
                            <Input type="datetime-local" name="departureDate" id="departureDate" onChange={(e) => setFlight({ ...flight, departure_date: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="arrivalDate">Arrival Date</Label>
                            <Input type="datetime-local" name="arrivalDate" id="arrivalDate" onChange={(e) => setFlight({ ...flight, arrival_date: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="departureTime">Departure Time</Label>
                            <Input type="time" name="departureTime" id="departureTime" onChange={(e) => setFlight({ ...flight, departure_time: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="arrivalTime">Arrival Time</Label>
                            <Input type="time" name="arrivalTime" id="arrivalTime" onChange={(e) => setFlight({ ...flight, arrival_time: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input type="number" name="price" id="price" onChange={(e) => setFlight({ ...flight, price: e.target.value })} />
                        </FormGroup>
                        {
                            addedItems.flight ? (
                                <Button onClick={handleFlightDelete}>Delete Flight</Button>
                            ) : (
                                <Button onClick={handleFlightSubmit}>Add Flight</Button>
                            )
                        }
                    </Form>
                    <hr></hr>
                    {/* Hotel Form */}
                    <Form style={{ marginLeft: "200px", marginRight: "200px" }}>

                        <h3>Hotel</h3>
                        <FormGroup>
                            <Label for="hotelName">Hotel Name</Label>
                            <Input type="text" name="hotelName" id="hotelName" onChange={(e) => setHotel({ ...hotel, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="hotelLocation">Location</Label>
                            <Input type="text" name="hotelLocation" id="hotelLocation" onChange={(e) => setHotel({ ...hotel, location: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="hotelPrice">Price</Label>
                            <Input type="number" name="hotelPrice" id="hotelPrice" onChange={(e) => setHotel({ ...hotel, price: e.target.value })} />
                        </FormGroup>
                        {
                            addedItems.hotel ? (
                                <Button onClick={handleHotelDelete}>Delete Hotel</Button>
                            ) : (
                                <Button onClick={handleHotelSubmit}>Add Hotel</Button>
                            )
                        }
                    </Form>

                    <hr></hr>
                    {/* Activity Form */}
                    <Form style={{ marginLeft: "200px", marginRight: "200px" }}>
                        <h3>Activity</h3>
                        <FormGroup>
                            <Label for="activityName">Activity Name</Label>
                            <Input type="text" name="activityName" id="activityName" onChange={(e) => setActivity({ ...activity, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="activityLocation">Location</Label>
                            <Input type="text" name="activityLocation" id="activityLocation" onChange={(e) => setActivity({ ...activity, location: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="activityDescription">Description</Label>
                            <Input type="textarea" name="activityDescription" id="activityDescription" onChange={(e) => setActivity({ ...activity, description: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="activityPrice">Price</Label>
                            <Input type="number" name="activityPrice" id="activityPrice" onChange={(e) => setActivity({ ...activity, price: e.target.value })} />
                        </FormGroup>
                        {
                            addedItems.activity ? (
                                <Button onClick={handleActivityDelete}>Delete Activity</Button>
                            ) : (
                                <Button onClick={handleActivitySubmit}>Add Activity</Button>
                            )
                        }
                    </Form>
                    <hr></hr>
                    {/* Package Form */}
                    <Form style={{ marginTop: "10px", marginLeft: "200px", marginRight: "200px", marginBottom: "20px" }}>
                        <FormGroup>
                            <Label for="packageName">Package Name</Label>
                            <Input type="text" name="packageName" id="packageName" onChange={(e) => setPackageDetails({ ...packageDetails, name: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="packageDescription">Description</Label>
                            <Input type="textarea" name="packageDescription" id="packageDescription" onChange={(e) => setPackageDetails({ ...packageDetails, description: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="packagePrice">Price</Label>
                            <Input type="number" name="packagePrice" id="packagePrice" value={packageDetails.total_cost} readOnly />
                        </FormGroup>
                        <FormGroup>
                            <Label for="packageDuration">Duration</Label>
                            <Input type="number" name="packageDuration" id="packageDuration" onChange={(e) => setPackageDetails({ ...packageDetails, travel_duration: e.target.value })} />
                        </FormGroup>
                        {/* Add other package fields similarly */}
                        <Button onClick={handlePackageSubmit}>Create Package</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreatePackage;
