import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';


const MyBookings = ({ booking }) => {

    console.log("The booking data is :  " + booking);

    if (!booking || booking.length === 0) {
        return <p>No Bookings found</p>;
    }

    return (
        <div className="booking-content">
            {booking && (
                <Card className="my-2">
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/180"
                        style={{
                            height: 180
                        }}
                        top
                        width="100%"
                    />
                    <CardBody className="card-body-package">
                        <CardTitle tag="h5">{booking.package_details ? booking.package_details.name : "No Package Name"}</CardTitle>
                        <div className="place-price">
                        <CardText className="mb-2 text-muted" tag="h6">
                                <p style={{ display: 'inline' }}>Booking Id : </p>{booking.id}
                            </CardText>
                            <CardText className="mb-2 text-muted" tag="h6">
                                <p style={{ display: 'inline' }}> Location :</p> {booking.package_details ? booking.package_details.location : "No Location"}
                            </CardText>
                            <CardText className="price">
                                {booking.bookingCost}$/{booking.package_details ? booking.package_details.travel_duration : "No Duration"}
                            </CardText>
                            <CardText className="price">
                                <p style={{ display: 'inline' }}>Status : </p>{booking.status}
                            </CardText>
                        </div>
                        <Button color="primary" >Cancel Booking</Button>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};

export default MyBookings;