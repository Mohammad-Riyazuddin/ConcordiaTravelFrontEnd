import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import base_url from "../api/bootapi";

import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${base_url}/login/`, {
                username,
                password
            });

            if (response.status === 200 && response.data.token) {
                console.log('Login successful:', response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userid', response.data.userId);
                localStorage.setItem('isStaff', response.data.isStaff);
                onLoginSuccess();
                if(localStorage.getItem('isStaff') === 'true'){
                    navigate('/AgentHome');
                } else{
                    navigate('/CustomerHome');
                }
            } else {
                // Handle login failure
                console.error('Login failed:', response.data);
            }
        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="6">
                    <h2 style={{ marginTop: "100px" }}>Concordia Travel login</h2>
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormGroup>
                        <div style={{ textAlign: 'center' }}>
                            <Button color="primary" onClick={handleLogin}>Login</Button>
                        </div>                        
                    </Form>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/register">Don't have an account? Register</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;