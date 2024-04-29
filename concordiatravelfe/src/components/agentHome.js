import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from "../api/bootapi";

const AgentHome = () => {
 const [bookings, setBookings] = useState([]);
 const [selectedBookingId, setSelectedBookingId] = useState(null);
 const [status, setStatus] = useState('');

 useEffect(() => {
    // Fetch bookings from the backend
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${base_url}/bookings/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      }
    };

    fetchBookings();
 }, []);

 const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await axios.put(`YOUR_BACKEND_API_ENDPOINT_FOR_UPDATING_BOOKING/${bookingId}`, { status: newStatus });
      // Update the local state to reflect the change
      setBookings(bookings.map(booking => booking.id === bookingId ? { ...booking, status: newStatus } : booking));
      setSelectedBookingId(null);
      setStatus('');
    } catch (error) {
      console.error('Failed to update booking status:', error);
    }
 };



 return (
    <Container>
      <Row className="justify-content-center">
        <Col md="12">
          <h2>All Bookings</h2>
          <Table striped>
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>User name</th>
                <th>Package ID</th>
                <th>Package Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                 <th scope="row">{index + 1}</th>
                 <td>{booking.user_id.username}</td>
                 <td>{booking.package}</td>
                 <td>{booking.package ? booking.package_details.name : "Custom Package"}</td>
                 <td>{booking.status}</td>
                 <td>
                    {selectedBookingId === booking.id ? (
                      <Form inline onSubmit={(e) => { e.preventDefault(); handleStatusChange(booking.id, status); }}>
                        <FormGroup>
                          <Label for="statusSelect">Change Status</Label>
                          <Input type="select" name="statusSelect" id="statusSelect" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Select Status</option>
                            <option value="Payment Pending">Payment Pending</option>
                            <option value="Payment Done">Payment Done</option>
                            <option value="Booking Confirmed">Booking Confirmed</option>
                            <option value="Cancelled">Cancelled</option>
                          </Input>
                        </FormGroup>
                        <Button color="primary" type="submit">Update</Button>
                      </Form>
                    ) : (
                      <Button color="secondary" onClick={() => setSelectedBookingId(booking.id)}>Change Status</Button>
                    )}
                 </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
 );
};

export default AgentHome;