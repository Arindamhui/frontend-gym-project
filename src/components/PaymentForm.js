import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ memberId }) => {
    const [formData, setFormData] = useState({
        payment_amount: '',
        late_fine: 0,
        total_amount: '',
        payment_mode: 'Cash'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/payments', { ...formData, member_id: memberId });
            console.log(response.data);
            alert('Payment added successfully!');
        } catch (error) {
            console.error(error);
            alert('Error adding payment');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="payment_amount" placeholder="Payment Amount" value={formData.payment_amount} onChange={handleChange} required />
            <input type="number" name="late_fine" placeholder="Late Fine" value={formData.late_fine} onChange={handleChange} />
            <input type="number" name="total_amount" placeholder="Total Amount" value={formData.total_amount} onChange={handleChange} required />
            <select name="payment_mode" value={formData.payment_mode} onChange={handleChange}>
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
            </select>
            <button type="submit">Make Payment</button>
        </form>
    );
};

export default PaymentForm;
