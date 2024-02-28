import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import '../csscomponents/flightSearch.css';

const FlightSearch = () => {
    return (
        <div>
            <InputGroup className="flight-search">
                <Input placeholder="leaving from..." />
                <Input placeholder="going to..." />
                <Input placeholder="departure date..." type="date" />
                <Button color='primary ml-3'>
                    Search
                </Button>
            </InputGroup>
        </div>
    )
}

export default FlightSearch;