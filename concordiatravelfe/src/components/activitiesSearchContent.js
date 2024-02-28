import React , { useState, useEffect } from "react";
import ActivityData from "./activitiesData";
import '../csscomponents/activitiesSearchContent.css';
import base_url from "../api/bootapi";
import axios from "axios";

const ActivitiesSearchContent = () => {

    const getAllactivities = () => {
        axios.get(`${base_url}/activities/`).then(
            (response) => {
                console.log(response);
                setActivityData(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const [activityData, setActivityData] = useState([
        // { name : "Skiing", description : "Delhi tour", price : 50},
        // { name : "Scating", description : "Montreal tour", price : 100},
        // { name : "Boating", description : "India tour", price : 30},
        // { name : "Sailing", description : "Chennai tour", price : 15},
        // { name : "Riding", description : "Mumbai tour", price : 50},
        // { name : "Hiking", description : "Bangalore tour", price : 18}
    ]);

    useEffect(() => {
        getAllactivities();
    },[]);

    return (
        <div className="activities-search-Results">
            {
                activityData.length > 0 
                ? activityData.map((item) => <ActivityData activities={item} />)
                : <p>No activities found</p>
            }
        </div>
    );
}

export default ActivitiesSearchContent;