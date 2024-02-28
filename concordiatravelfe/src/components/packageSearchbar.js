import { Button, Input, InputGroup } from "reactstrap";
import '../csscomponents/packageSearchbar.css';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';

const PackageSearchBar = () => {
    return (
        <div className='heading text-center'>
            <div className="background">
                <img src={hero} alt="" />
            </div>
            <div className="content">
                <h1 className='title'>
                    CONCORDIA TRAVELS!
                </h1>
                <p>
                    Embark on unforgettable journeys and discover the wonders of our
                    world with our curated travel experiences.
                </p>
                <div>
                    <InputGroup>
                        <Input placeholder="destination..." />
                        <Button color='primary ml-3'>
                            <Link to="/packageSearch" style={{textDecoration: 'none', color: 'white'}}>
                                Search
                            </Link>
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
}

export default PackageSearchBar;