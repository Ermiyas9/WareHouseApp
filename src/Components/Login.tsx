import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import UserLoginIcon from "../assets/UserLoginIcon.png";
import EmailIcon from "../assets/EmailIcon.png";
import PasswordIcon from "../assets/PasswordIcon.png";
import "../Components/Login.css";
import "../index.css";

const Login: React.FC = () => {
  // setting a state variable
  const [action, setAction] = useState("Login");

  return (
    <>
      <p className="title">WareHouse Inventory Hub</p>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={UserLoginIcon} alt="" />
            <input type="text" placeholder="Name" />
          </div>

          <div className="input">
            <img src={EmailIcon} alt="" />
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="input">
            <img src={PasswordIcon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgotPassword">
          Forgot Your Password?
          <span>Click Here!</span>
        </div>

        <div className="submitContainer">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Register Here");
            }}
          >
            Register Here
          </div>
          <div
            className={action === "Register Here" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
