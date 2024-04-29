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
    const isStaff = localStorage.getItem('isStaff') === 'true';
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
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to={isStaff ? "/create-package" : "/CustomerHome"}>Home</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to={isStaff ? "/create-package" : "/Flights"}>Flights</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to={isStaff ? "/create-package" : "/Hotels"}>Hotels</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }} to={isStaff ? "/create-package" : "/Activities"}>Activities</Link>
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