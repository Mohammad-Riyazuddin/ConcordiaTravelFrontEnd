import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap";
import '../csscomponents/flightData.css';

const FlightData = ( { flights }) => {
    return (
        <div>
            <Card className="card-ac">
                <CardBody className="card-body">
                    <div>
                        <CardTitle className="card-title">{flights.departure_time} </CardTitle>
                        <CardTitle className="card-title">-</CardTitle>
                        <CardTitle className="card-title">{flights.arrival_time}</CardTitle>
                        <br />
                        <CardText className="airport">From {flights.departure_city} ({flights.from_airport})</CardText>
                        <CardText className="airport">To {flights.destination_city} ({flights.to_airport})</CardText>
                        <br />
                        <CardText className="card-subtitle">{flights.airlines}</CardText>
                    </div>
                    <div className="price-div">
                        <CardText className="price">Price: ${flights.price}</CardText>
                        <Button size="sm">View Details</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default FlightData;