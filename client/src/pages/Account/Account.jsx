import React from "react";
import "./Account.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Account = () => {
  const user = useSelector((state) => state.auth.login.currenUser);

  return (
    <div className="account">
      {user ? (
        <>
          <p>
            <span>fullname</span>: {user.data.user.fullname}
          </p>
          <p>
            <span>email</span>: {user.data.user.email}
          </p>
          <p>
            <span>phone</span>: {user.data.user.phone}
          </p>
          <p>
            <span>address</span>: {user.data.user.address}
          </p>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
export default Account;
