import React, { useEffect, useState } from 'react';
import './App.css';
import PackageSearchBar from './components/packageSearchbar';
import Nnavbar from './components/navbar';
import FlightSearch from './components/flightSearch';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import FlightSearchContent from './components/flightSearchContent';
import HotelSearch from './components/hotelSearch';
import HotelSearchContent from './components/hotelSearchContent';
import PackageSearchContent from './components/packageSearchContent';
import ActivitySearch from './components/activitySearch';
import ActivitiesSearchContent from './components/activitiesSearchContent';
import PackageDetails from './components/packageDetails';
import FlightDetails from './components/flightDetails';
import ActivityDetails from './components/activityDetails';
import HotelDetails from './components/hotelDetails';
import Login from './components/login';
import Booking from './components/booking';
import BookingSuccessPage from './components/bookingSuccessPage';
import MainBookingComponent from './components/myBookingsPage';
import Register from './components/register';
import AgentHome from './components/agentHome';
import CreatePackage from './components/createPackage';
import PackageCreationSuccessPage from './components/pacakgeCreationSuccessPage';

function App() {

  // const [bookingType, SetBookingtype] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if(query.get("success")) {
      <BookingSuccessPage/>
      console.log("Order placed! You will receive an email confirmation.");
    }
    if(query.get("canceled")) {
      // SetBookingtype("package");
      console.log("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  } , []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {/* {bookingType ? (
        <BookingSuccessPage bookingType={bookingType} />
      ) : (
        <></>
      )} */}
      <Router>
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="register" element={<Register />} />
        </Routes>
        {isAuthenticated && (
          <>
            <div>
              <Nnavbar setIsAuthenticated={setIsAuthenticated} />
            </div>
            <div>
              <Routes>
                <Route path="/CustomerHome" Component={PackageSearchBar} exact />
                <Route path="/Flights" Component={FlightSearch} exact />
                <Route path="/Hotels" Component={HotelSearch} exact />
                <Route path="/Activities" Component={ActivitySearch} exact />
                <Route path="/packageDetails/:id" Component={PackageDetails} />
                <Route path="/flightDetails/:id" Component={FlightDetails} />
                <Route path="/activityDetails/:id" Component={ActivityDetails} />
                <Route path="/hotelDetails/:id" Component={HotelDetails} />
                <Route path="/book" Component={Booking} />
                <Route path="/bookingSuccessPage" Component={BookingSuccessPage} />
                <Route path="/mybookings" Component={MainBookingComponent} />
                <Route path="/register" Component={Register} />
                <Route path="/agenthome" Component={AgentHome} />
                <Route path="/create-package" Component={CreatePackage} />
                <Route path="/packageCreationSuccessPage" Component={PackageCreationSuccessPage} />
              </Routes>
            </div>
            <div>
              <Routes className='search-Results'>
                <Route path="/CustomerHome" Component={PackageSearchContent} />
                <Route path="/Flights" Component={FlightSearchContent} />
                <Route path="/Hotels" Component={HotelSearchContent} />
                <Route path="/Activities" Component={ActivitiesSearchContent} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
