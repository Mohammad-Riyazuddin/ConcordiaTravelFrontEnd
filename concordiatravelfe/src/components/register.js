import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import base_url from "../api/bootapi";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('CUSTOMER');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post(`${base_url}/register/`, {
                username,
                email,
                user_type: userType,
                is_staff: userType === 'agent',
                password
            });

            if (response.status === 201) {
                console.log('Registration successful:', response.data);
                // Optionally, navigate to a success page or login page
                navigate('/login');
            } else {
                console.error('Registration failed:', response.data);
            }
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="6">
                    <h2 style={{ marginTop: "40px" }}>Concordia Travel Register</h2>
                    <Form onSubmit={handleRegister}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userType">User Type</Label>
                            <Input type="select" name="userType" id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                                <option value="customer">Customer</option>
                                <option value="agent">Agent</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </FormGroup>
                        <div style={{ textAlign: 'center' }}>
                            <Button color="primary" type="submit">Register</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;