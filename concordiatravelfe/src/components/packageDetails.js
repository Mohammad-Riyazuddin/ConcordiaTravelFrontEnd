import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import '../csscomponents/packageDetails.css';

const PackageDetails = () => {

    return (
        <div>
            <h1>Package Details</h1>
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
                        <CardTitle tag="h5">
                            London Trip
                        </CardTitle>
                        <CardText>
                            London's timeless charm whispers through cobbled streets, where every corner holds a story, and every skyline paints a picture of wonder.
                            In the heart of London's embrace, beneath the shadow of iconic landmarks, memories dance like autumn leaves, creating a tapestry of unforgettable moments.
                        </CardText>
                        <CardText>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default PackageDetails;
