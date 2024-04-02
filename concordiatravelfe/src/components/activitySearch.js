import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import '../csscomponents/activitySearch.css';
import hero from '../assets/heroothers.png';

const ActivitySearch = () => {
    return (

        <div>
             <div className="background">
                <img src={hero} alt="" />
            </div>
            <div className="content-activity">
                <InputGroup className="activity-search">
                    <Input placeholder="destination..." />
                    <Button color='primary ml-3'>
                        Search
                    </Button>
                </InputGroup>
            </div>
            
        </div>
    );
}

export default ActivitySearch;