import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';
import '../csscomponents/navbar.css';
import profileIcon from '../assets/user-solid.svg';
import { Link } from 'react-router-dom';

const Nnavbar = () => {

    return (
        <div>
            <div className="logo" ></div>
            <div className="navigationBar">
                <Navbar>
                    <Nav className="nav-options me-auto" navbar>
                        <Row>
                            <Col>
                                <NavItem className="nav-item" >
                                    <Link className="nav-link nav-link-active" style={{textDecoration: 'none', color: 'blue', fontWeight: 'bold'}} to="/">Home</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{textDecoration: 'none', color: 'blue', fontWeight: 'bold'}} to="/Flights">Flights</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{textDecoration: 'none', color: 'blue', fontWeight: 'bold'}} to="/Hotels">Hotels</Link>
                                </NavItem>
                            </Col>
                            <Col>
                                <NavItem className="nav-item">
                                    <Link className="nav-link nav-link-active" style={{textDecoration: 'none', color: 'blue', fontWeight: 'bold'}} to="/Activities">Activities</Link>
                                </NavItem>
                            </Col>
                        </Row>
                    </Nav>
                    <div className="profile-logo" >
                        <img src={profileIcon} alt="Profile" />
                    </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Nnavbar;