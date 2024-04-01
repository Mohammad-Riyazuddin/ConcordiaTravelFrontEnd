import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = () => {
    const [formData, setFormData] = useState({
       username: '',
       password: '',
       confirmPassword: '',
       email: '',
       user_type: 'CUSTOMER',
    });
   
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = (e) => {
       e.preventDefault();
       if (formData.password !== formData.confirmPassword) {
         alert('Passwords do not match');
         return;
       }
       // Call your registerUser function here with formData
       console.log(formData);
    };
   
    return (
       <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
         <Row>
           <Col md="6">
             <h2>Register</h2>
             <Form onSubmit={handleSubmit}>
               <FormGroup>
                 <Label for="username">Username</Label>
                 <Input type="text" name="username" id="username" placeholder="Username" value={formData.username} onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                 <Label for="email">Email</Label>
                 <Input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                 <Label for="password">Password</Label>
                 <Input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                 <Label for="confirmPassword">Confirm Password</Label>
                 <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
               </FormGroup>
               <Button color="primary" type="submit">Register</Button>
             </Form>
           </Col>
         </Row>
       </Container>
    );
   };
   
   export default Register;