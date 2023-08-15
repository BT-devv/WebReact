import React, { useState } from 'react';
import "./Payment.scss"

const Payment = () => {
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };
  const handleConfirmPayment = () => {
    // You can add your logic to confirm the payment here
    alert("Payment confirmed!");
  };

  return (
    <div className="Checkout">
      <h1>Confirm Your Order</h1>
      <div className='layout'>
      <div className="customer-info">
        <h2>Customer Information</h2>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={customerInfo.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={customerInfo.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={customerInfo.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
      </div>
      
      <div className="payment-methods">
        <h2>Payment Methods</h2>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={selectedPaymentMethod === 'cash'}
            onChange={() => handlePaymentMethodSelect('cash')}
          />
          Cash
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={selectedPaymentMethod === 'creditCard'}
            onChange={() => handlePaymentMethodSelect('creditCard')}
          />
          Credit Card
        </label>
      </div>
      </div>
      
      <button className="ConfirmButton" onClick={handleConfirmPayment}>Confirm Payment</button>
     
    </div>
  );
};

export default Payment;
