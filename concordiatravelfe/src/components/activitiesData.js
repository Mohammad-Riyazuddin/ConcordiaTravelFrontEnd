import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import '../csscomponents/activityData.css';
import { Link } from "react-router-dom";

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
                    <Link to={`/activityDetails/${props.activities.id}`} style={{textDecoration: 'none',color: 'white', fontWeight: 'bold'}}>
                        <Button className="activity-details-button" size="sm">
                            Details
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        </div>
    );
}

export default ActivityData;