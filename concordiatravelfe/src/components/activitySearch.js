import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import '../csscomponents/activitySearch.css';

const ActivitySearch = () => {
    return (
        <div>
            <InputGroup className="activity-search">
                <Input placeholder="destination..." />
                <Button color='primary ml-3'>
                    Search
                </Button>
            </InputGroup>
        </div>
    );
}

export default ActivitySearch;