import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import '../csscomponents/hotelData.css';
import { Link } from "react-router-dom";

const HotelData = ({ hotels }) => {
    return (
        <div>
            <Card className="card-ac" color="info" style={{ width: '15rem' }} >
                <img className="card-img-top" alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody className="card-body-hotel">
                    <CardTitle tag="h5">
                        {hotels.name}
                    </CardTitle>
                    <div className="place-price">
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            {hotels.location}
                        </CardSubtitle>
                        <CardText className="price">
                            {hotels.price}$/night
                        </CardText>
                    </div>
                    <Link to={`/hotelDetails/${hotels.id}`} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                        <Button className="hotel-details-button" size="sm">
                            Details
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
    )
}

export default HotelData;