import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import '../csscomponents/hotelSearch.css';

const HotelSearch = () => {
    return (
        <div>
            <InputGroup className="hotel-search">
                <Input placeholder="destination..." />
                <Button color='primary ml-3'>
                    Search
                </Button>
            </InputGroup>
        </div>
    );
}

export default HotelSearch;