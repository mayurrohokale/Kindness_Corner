import React, { useState } from 'react';
import axios from 'axios';
const Testdonation = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        amount: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/createorder', formData);
            const { orderId } = response.data;

            const options = {
                key: 'your_razorpay_key_id',
                amount: formData.amount * 100,
                currency: "INR",
                name: "Your Company Name",
                description: "Test Transaction",
                order_id: orderId,
                handler: async function (response) {
                    await axios.post('http://localhost:8000/verifypayment', {
                        order_id: orderId,
                        payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature
                    });
                    alert('Payment Successful');
                },
                prefill: {
                    name: formData.username,
                    email: formData.email,
                    contact: formData.phone
                },
                notes: {
                    address: formData.address
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error(error);
            alert('Something went wrong');
        }
    };

    return (
        <div>
            <h1>Razorpay Payment Integration</h1>
            <form onSubmit={handlePayment}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                <input type="number" name="amount" placeholder="Amount" onChange={handleChange} required />
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

export default Testdonation;
    ;
