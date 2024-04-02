import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    Row,
    Col,
} from 'reactstrap';
import '../csscomponents/navbar.css';
import profileIcon from '../assets/user-solid.svg';
import { Link } from 'react-router-dom';
import ProfileDropdown from "../components/profiledropdown";

const Nnavbar = ({ setIsAuthenticated }) => {
    const [openProfile, setOpenProfile] = React.useState(false);

    const toggleDropdown = () => setOpenProfile(!openProfile);

    return (
        <div>
            <div className="logo" ></div>
            <div className="navigationBar">
                <Navbar>
                    <Nav className="nav-options me-auto" navbar>
                        <Row>
                            <Col>
                                <NavItem className="nav-item" >
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to="/CustomerHome">Home</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to="/Flights">Flights</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to="/Hotels">Hotels</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to="/Activities">Activities</Link>
                                </NavItem>
                            </Col>
                        </Row>
                    </Nav>
                    <div className="profile-logo" onClick={toggleDropdown}>
                        <img src={profileIcon} alt="Profile" />
                        {openProfile && <ProfileDropdown openProfile={openProfile} setOpenProfile={setOpenProfile} setIsAuthenticated={setIsAuthenticated} />}
                    </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Nnavbar;