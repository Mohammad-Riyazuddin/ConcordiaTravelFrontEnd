import React from "react";
import { Alert } from "reactstrap";
import { useLocation } from "react-router-dom";

const BookingSuccessPage = () => {
    const location = useLocation();
    const bookingType = location.state?.bookingType;


    console.log('The bookingType is ' + bookingType);

    return (
        <div style={{ marginTop: "100px", marginLeft: "200px", marginRight: "200px" }}>
            <Alert>
                <h4 className="alert-heading" style={{ textAlign: "center" }}>
                    Booking successful!
                </h4>
                <p style={{ fontSize: "14px" , textAlign: "center"}}>
                    Aww yeah!!, you successfully Booked a {bookingType}. Thank you for using Concordia Travels.
                </p>
                <p style={{ fontSize: "14px" , textAlign: "center" }}>
                    hope you will enjoy your trip.
                </p>
                <hr />
                <p className="mb-00" style={{ fontSize: "14px" , fontWeight: "bold" , textAlign: "center"}}>
                    The booking invoice will be sent to your email.
                </p>
            </Alert>
        </div>
    );
};
export default BookingSuccessPage;