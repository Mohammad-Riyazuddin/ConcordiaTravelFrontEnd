import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import '../csscomponents/flightSearch.css';
import hero from '../assets/heroothers.png';

const FlightSearch = () => {
    return (
        <div>
             <div className="background">
                <img src={hero} alt="" />
            </div>
            <div className="content-activity">
                <InputGroup className="flight-search">
                    <Input placeholder="leaving from..." />
                    <Input placeholder="going to..." />
                    <Input placeholder="departure date..." type="date" />
                    <Button color='primary ml-3'>
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}

export default FlightSearch;