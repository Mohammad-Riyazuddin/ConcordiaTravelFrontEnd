import React, { useState } from 'react';
import './App.css';
import PackageSearchBar from './components/packageSearchbar';
import Nnavbar from './components/navbar';
import FlightSearch from './components/flightSearch';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Router>
      {isAuthenticated ? (
        <>
          <div>
            <Nnavbar  setIsAuthenticated={setIsAuthenticated} />
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
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
      </Router>
    </div>
  );
}

export default App;
