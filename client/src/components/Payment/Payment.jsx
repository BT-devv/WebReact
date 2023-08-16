import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Payment.scss";
import { useDispatch } from 'react-redux';

import { resetCart } from '../../redux/cartReducer';


const Payment = () => {
  const [customerInfo, setCustomerInfo] = useState({
    fullname: '',
    adress: '',
    phone: '',
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
  const dispatch = useDispatch();

  const handleConfirmPayment = () => {
    // You can add your logic to confirm the payment here
    alert("Payment confirmed!");
    dispatch(resetCart());

  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
 // id người dùng được lưu trong JWT token dưới dạng payload.userId
 const userId = JSON.parse(atob(token.split(".")[1])).id;
      axios
        .get(`http://localhost:3001/api-user/${userId}`) // Change the API endpoint
        .then((response) => {
          const userData = response.data.data.user; // Assuming response.data contains user data
          setCustomerInfo({
            fullname: userData.fullname,
            adress: userData.adress,
            phone: userData.phone,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
        });
    }
  }, []);

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
              value={customerInfo.fullname}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={customerInfo.adress}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={customerInfo.phone}
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
