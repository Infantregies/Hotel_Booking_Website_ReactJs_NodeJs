import React, { useState } from 'react';
import './payment.css';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePaymentSubmit = (event) => {
        event.preventDefault();

        // Handle payment based on selected method
        if (paymentMethod === 'upi') {
            const upiId = document.getElementById('upiId').value;
            const amount = document.getElementById('paymentAmount').value; // Amount in INR

            // Show confirmation message
            alert(`Payment of ₹${amount} is being processed to UPI ID: ${upiId}.`);

            // Optionally, you can log the details or send it to your backend for processing.
            console.log(`Payment Info: Amount - ₹${amount}, UPI ID - ${upiId}`);
        } else {
            alert('Payment Successful!'); // Placeholder for other payment methods
        }
    };

    return (
        <div className="payment-page">
            <div className="payment-card">
                <h2>Payment Details</h2>
                <form onSubmit={handlePaymentSubmit}>
                    <div className="input-field">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" placeholder="Enter your name" required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="paymentAmount">Amount to Pay</label>
                        <input type="number" id="paymentAmount" placeholder="Enter amount" required />
                    </div>
                    <div className="payment-methods">
                        <label className="method-option">
                            <input
                                type="radio"
                                id="creditCard"
                                value="creditCard"
                                checked={paymentMethod === 'creditCard'}
                                onChange={handlePaymentMethodChange}
                            />
                            Credit Card
                        </label>
                        <label className="method-option">
                            <input
                                type="radio"
                                id="paypal"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={handlePaymentMethodChange}
                            />
                            PayPal
                        </label>
                        <label className="method-option">
                            <input
                                type="radio"
                                id="netBanking"
                                value="netBanking"
                                checked={paymentMethod === 'netBanking'}
                                onChange={handlePaymentMethodChange}
                            />
                            Net Banking
                        </label>
                        <label className="method-option">
                            <input
                                type="radio"
                                id="upi"
                                value="upi"
                                checked={paymentMethod === 'upi'}
                                onChange={handlePaymentMethodChange}
                            />
                            UPI
                        </label>
                    </div>
                    {paymentMethod === 'creditCard' && (
                        <div className="input-field">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" id="cardNumber" placeholder="Enter your card number" required />
                            <div className="input-field">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="expiryDate">Expiry Date</label>
                                        <input type="month" id="expiryDate" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" placeholder="123" maxLength="3" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {paymentMethod === 'paypal' && (
                        <p className="text-muted">You will be redirected to PayPal to complete your payment.</p>
                    )}
                    {paymentMethod === 'netBanking' && (
                        <div className="input-field">
                            <label htmlFor="bank">Select Bank</label>
                            <select id="bank" required>
                                <option value="">Choose your bank</option>
                                <option value="hdfc">HDFC Bank</option>
                                <option value="icici">ICICI Bank</option>
                                <option value="sbi">State Bank of India</option>
                                <option value="axis">Axis Bank</option>
                            </select>
                        </div>
                    )}
                    {paymentMethod === 'upi' && (
                        <div className="input-field">
                            <label htmlFor="upiId">Enter UPI ID</label>
                            <input
                                type="text"
                                id="upiId"
                                placeholder="Enter your UPI ID (e.g., user@upi)"
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="pay-now-btn">Pay Now</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
