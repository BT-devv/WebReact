// Checkout.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import "./Checkout.scss"
import { Link } from 'react-router-dom';


const Checkout = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const handleDeleteItem = (productId) => {
    dispatch(removeItem(productId)); 
  };
  return (
    <div className="Checkout">
      <div className="CheckoutHeader">
        <h1>Your Order</h1>
      </div>
      <div className="ItemContainer">
        {cartProducts.map((item) => (
          <div key={item.id} className="CartItem">
            <img src={item.img} alt={item.title} />
            <div className="ItemDetails">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <p>Price: ${item.newPrice}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="DeleteButton"
               onClick={() => handleDeleteItem(item.id)} >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="Total">
        <h2>Total</h2>
        <p>
          $
          {cartProducts.reduce(
            (total, item) => total + item.quantity * item.newPrice,
            0
          )}
        </p>
      </div>
      <Link to = "/Payment">
        <button className="CheckoutButton">Payment</button>
      </Link>
      
    </div>
  );
};

export default Checkout;
