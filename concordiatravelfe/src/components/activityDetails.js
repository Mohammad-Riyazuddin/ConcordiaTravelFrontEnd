import React , { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import '../csscomponents/activityDetails.css'; 
import { useParams } from 'react-router-dom';
import base_url from "../api/bootapi";
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

const ActivityDetails = () => {
    const [activityDetails, setActivityDetails] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchActivityDetails = async () => {
            try {
                const response = await axios.get(`${base_url}/activities/${id}/`);
                setActivityDetails(response.data);
            } catch (error) {
                console.log("Failed to fetch activity details:", error);
            }
        };

        if (id) {
            fetchActivityDetails();
        }
    }, [id]);


    const handleActivityBookNow = () => {
        const bookingInfo = {
            activity : activityDetails? activityDetails.name : 'No activity in this package',
            totalCost : Number(activityDetails.price)
        };
        navigate('/book', { state: bookingInfo });
    };


    if (!activityDetails) {
        return <div>No activity details provided.</div>;
    }

    return (
        <div>
            <h4 className="activity-details-heading">Activity Details</h4>
            <Card className="activity-details-card">
                <CardImg
                    alt="Activity image"
                    src="https://picsum.photos/900/180" // Placeholder image
                    style={{ height: 180 }}
                    top
                />
                <CardBody>
                    <div className="activity-name-container">
                        <CardTitle tag="h5">
                            {activityDetails.name}
                        </CardTitle>
                        <Button color="primary" onClick={handleActivityBookNow}>Book Now</Button>
                    </div>
                    <CardText>
                        <p>Description: {activityDetails.description}</p>
                        <p>Price: {activityDetails.price}</p>
                    </CardText>
                    
                </CardBody>
            </Card>
        </div>
    );
}

export default ActivityDetails;