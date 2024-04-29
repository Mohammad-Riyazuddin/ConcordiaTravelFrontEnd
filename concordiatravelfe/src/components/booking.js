// Booking.js
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import '../csscomponents/booking.css';
import base_url from "../api/bootapi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QueryString from 'query-string';


const Booking = () => {
    const location = useLocation();
    const bookingInfo = location.state;
    const [numberOfPeople, setNumberOfPeople] = useState(bookingInfo.numberOfPeople || 1);
    const totalCost = Number(bookingInfo.totalCost) * numberOfPeople;
    const [errorMessage, setErrorMessage] = useState('');
    const [bookingType, setBookingType] = useState(null);

    const navigate = useNavigate();


    console.log('The bookingInfo is ' + bookingInfo.package_id + ' ' + bookingInfo.hotel + ' ' + bookingInfo.flight + ' ' + bookingInfo.activity);

    const determineBookingType = () => {
        if (bookingInfo.package_id !== null && bookingInfo.package_id !== undefined) {
            setBookingType("package");
        } else if (bookingInfo.hotel !== null && bookingInfo.hotel !== undefined) {
            setBookingType("hotel");
        } else if (bookingInfo.flight !== null && bookingInfo.flight !== undefined && bookingInfo.flight !== '') {
            setBookingType("flight");
        } else if (bookingInfo.activity !== null && bookingInfo.activity !== undefined) {
            setBookingType("activity");
        } else {
            console.log('No matching conditions found');
        }
    };

    // Use useEffect to call determineBookingType whenever bookingInfo changes
    useEffect(() => {
        const paymentValues = QueryString.parse(location.search);
        console.log('paymentValues is ' + JSON.stringify(paymentValues));
        
        const query = new URLSearchParams(window.location.search);
        

        if (paymentValues.success) {
            console.log("booking type is "+ bookingType);
            navigate('/bookingSuccessPage', { state: { bookingType: determineBookingType() } });
            console.log("Order placed! You will receive an email confirmation.");
        }else if (query.get("canceled")) {
            navigate('/home', { state: { bookingType: bookingType } });
            console.log(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, [location.search]);
    // Function to handle the payment
    const handlePayment = async () => {
        try {
            // Retrieve the token from local storage
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userid');
            console.log('bookinginfo is ' + bookingInfo);
            // Define the payload
            const payload = {
                bookingCost: totalCost,
                status: "Booked",
                user_id: parseInt(userId),
                package: bookingInfo.package_id,
                name: bookingInfo.name,
            };


            // const response = await axios.post(`${base_url}/stripe/create-checkout-session/${bookingInfo.package_id}`);
            // console.log(response.data);
            // const csrfToken = document.querySelector('[name="csrfmiddlewaretoken"]').value;
            // fetch(
            //     "% base_url 'stripe/create-checkout-session' bookingInfo.package_id %", {
            //     method: 'POST',
            //     headers: {
            //         'X-CSRFToken': csrfToken,
            //     }
            // }
            // )

            // navigate('/payments', { state: { payload: payload } });
            // const query = new URLSearchParams(window.location.search);
            // if (query.get("success")) {
            //     const response = await axios.post(`${base_url}/bookings/`, payload, { headers });
            //     if (response.status === 201) {
            //         // Handle successful payment
            //         console.log('The bookingType is ' + bookingType);
            //         navigate('/bookingSuccessPage', { state: { bookingType: bookingType } });
            //         console.log('Payment successful');
            //     } else {
            //         // Handle payment failure
            //         console.error('Payment failed');
            //     }
            //     // Handle the response
            //     console.log(response.data);
            //     console.log("Order placed! You will receive an email confirmation.");
            // }

            // if (query.get("canceled")) {
            //     console.log(
            //         "Order canceled -- continue to shop around and checkout when you're ready."
            //     );
            // }

        } catch (error) {
            // Handle errors
            console.error(error);
            // You can show an error message to the user here
        }
    };

    return (
        <div className="booking-container">

            <Card>
                <CardBody>
                    <CardTitle tag="h5">Booking Details</CardTitle>
                    <CardText>
                        <strong>Hotel:</strong> {bookingInfo.hotel}
                    </CardText>
                    <CardText>
                        <strong>Flight:</strong> {bookingInfo.flight}
                    </CardText>
                    <CardText>
                        <strong>Activities:</strong> {bookingInfo.activities}
                    </CardText>
                    <FormGroup className="form-inline">
                        <Label for="numberOfPeople">Number of People</Label>
                        <Input
                            type="number"
                            min="1"
                            id="numberOfPeople"
                            value={numberOfPeople}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value < 1) {
                                    setErrorMessage('Number of people must be at least 1.');
                                } else {
                                    setErrorMessage('');
                                }
                                setNumberOfPeople(value);
                            }}
                        />
                        {errorMessage && <FormText color="danger">{errorMessage}</FormText>}
                    </FormGroup>
                    <CardText>
                        <strong>Total Cost:</strong> ${totalCost.toFixed(2)}
                    </CardText>
                    <form action={`${base_url}/stripe/create-checkout-session/${bookingInfo.package_id}`} method="POST">
                        <Button color="primary" >Make Payment</Button>
                    </form>
                    {/* <Button color="primary" onClick={handlePayment}>Make Payment</Button> */}
                </CardBody>
            </Card>
        </div>
    );
};

export default Booking;