import React from "react";
import {
    Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from "reactstrap";
import '../csscomponents/packagedata.css';
import { Link } from "react-router-dom";

const PackageData = ( { packages }) => {
    return (
        <div>
            <Card className="card-pc" color="info" style={{ width: '17rem' }} >
                <img className="card-img-top" alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody className="card-body-package">
                    <CardTitle tag="h5">
                        {packages.name}
                    </CardTitle>
                    <div className="place-price">
                        <CardSubtitle className="mb-2 text-muted" tag="h6" >
                            {packages.location}
                        </CardSubtitle>
                        <CardText className="price">
                            {packages.total_cost}$/{packages.travel_duration}
                        </CardText>
                    </div>
                    {/* <Button className="package-details-button" size="sm"> */}
                        <Link to="/packagedetails" style={{textDecoration: 'none',color: 'white', fontWeight: 'bold'}}>
                            <Button className="package-details-button" size="sm">Details</Button>
                        </Link>
                    {/* </Button> */}
                </CardBody>
            </Card>
        </div>
    );
}

export default PackageData;