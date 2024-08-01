import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        member_name: '',
        address: '',
        phone_number: '',
        email: '',
        membership_start_date: '',
        membership_end_date: '',
        registration_fees: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/registrations', formData);
            console.log(response.data);
            alert('Registration added successfully!');
        } catch (error) {
            console.error(error);
            alert('Error adding registration');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="member_name" placeholder="Member Name" value={formData.member_name} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="date" name="membership_start_date" value={formData.membership_start_date} onChange={handleChange} required />
            <input type="date" name="membership_end_date" value={formData.membership_end_date} onChange={handleChange} required />
            <input type="number" name="registration_fees" placeholder="Registration Fees" value={formData.registration_fees} onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
