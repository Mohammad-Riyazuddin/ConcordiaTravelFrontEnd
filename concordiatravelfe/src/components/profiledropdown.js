import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import axios from 'axios';
import base_url from "../api/bootapi";
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = ({ openProfile, setOpenProfile, setIsAuthenticated }) => {

    const toggleDropdown = () => setOpenProfile(!openProfile);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log("token", token);
            const response = await axios.post(`${base_url}/logout/`, {}, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })


            if (response.status === 200 && response.data.message === 'Logged out successfully') {
                console.log('Logout successful:', response.data);
                localStorage.removeItem('token');
                setIsAuthenticated(false);
                navigate('/login');
            } else {
                // Handle login failure
                console.error('Logout failed:', response.data);
            }
        } catch (error) {
            // Handle login error
            console.error('Logout failed:', error);
        }
    };

    

    return (
        <Dropdown isOpen={openProfile} toggle={toggleDropdown}>
            <DropdownToggle nav caret={false}>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>
                    Profile
                </DropdownItem>
                <DropdownItem onClick={() => navigate('/mybookings')}>
                    My bookings
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default ProfileDropdown;