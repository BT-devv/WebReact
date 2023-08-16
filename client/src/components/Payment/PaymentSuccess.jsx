import React from 'react';

const PaymentSuccess = ({ orderData }) => {
  return (
    <div className="PaymentSuccess">
      <h1>Payment Successful!</h1>
      <p>Thank you for your order. Here are the details of your order:</p>
      <ul>
        <li>Order Date: {orderData.order_date}</li>
        <li>Total Price: {orderData.total_price} VND</li>
        {/* Thêm thông tin đơn hàng khác vào đây */}
      </ul>
    </div>
  );
};

export default PaymentSuccess;
