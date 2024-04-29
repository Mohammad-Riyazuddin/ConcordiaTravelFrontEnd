import React, { useState, useEffect } from 'react';
import MyBookings from './myBookings';
import '../csscomponents/myBookings.css';


import base_url from "../api/bootapi";
import axios from 'axios';


const MainBookingComponent = () => {
    
    const getBookingData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${base_url}/bookings/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });

            console.log("The booking data is :  "+ response.data);
            setBookingData(response.data);

        } catch (error) {
            console.error('Failed to fetch bookings:', error);
            // Handle error
        }
    };

    useEffect(() => {
        getBookingData();
    },[]);

    const [bookingsData, setBookingData] = useState([]);

    return (
        <div>
            <h4 className="my-bookings">My Bookings</h4>
            <div className="bookings-search-Results">
                {
                    bookingsData.length > 0
                        ? bookingsData.map((bookapi) => <MyBookings key={bookapi.id} booking={bookapi} />)
                        : <p className='no-booking'>No Bookings found</p>
                }
            </div>
        </div>
    );
};

export default MainBookingComponent;