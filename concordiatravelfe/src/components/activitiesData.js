import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ActivityData = (props) => {
    return (
        <div>
            <Card className="card-ac" color="info" style={{ width: '15rem' }}>
                <img className="card-img-top" alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody className="card-body">
                    <CardTitle tag="h5">
                        {props.activities.name}
                    </CardTitle>
                    <div className="place-price">
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {props.activities.description}
                        </CardSubtitle>
                        <CardText className="price">
                            {props.activities.price} $/person
                        </CardText>
                    </div>
                    <Button className="activity-details-button" size="sm">
                        Details
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default ActivityData;