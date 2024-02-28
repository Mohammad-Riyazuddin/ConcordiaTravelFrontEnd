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

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nnavbar />
        </div>
        <div>
          <Routes>
              <Route path="/" Component={PackageSearchBar} exact />
              <Route path="/Flights" Component={FlightSearch} exact />
              <Route path="/Hotels" Component={HotelSearch} exact />
              <Route path="/Activities" Component={ActivitySearch} exact />
              <Route path="/packageDetails" Component={PackageDetails} />
          </Routes>
        </div>
        <div className='search-Results'>
          <Routes>
            <Route path="/" Component={PackageSearchContent} />
            <Route path="/Flights" Component={FlightSearchContent} />
            <Route path="/Hotels" Component={HotelSearchContent} />
            <Route path="/Activities" Component={ActivitiesSearchContent} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
