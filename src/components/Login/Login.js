import React, { useState } from "react";
import "../../stylesheet/Login/login.css";

import amazonLogo from "../../assets/amazon_logo_black.png";

import { Link } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={amazonLogo} alt="home" className="amazonLogo" />
      </Link>

      <div className="loginFormBox">
        <h3>Login</h3>
        <form className="loginForm">
          <h5 className="heading">E-mail</h5>
          <input
            className="inputFields"
            type="text"
            onChange={(e) => setemail(e.target.value)}
          />
          <h5 className="heading">password</h5>
          <input
            className="inputFields"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit" className="signInButton" onClick={signIn}>
            Sign-In
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          By continuing, you agree to Amazon's{" "}
          <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">
            Privacy Notice
          </a>{" "}
          .
        </p>
      </div>

      <p style={{ marginTop: "10px" }}>new to Amazon?</p>
      <button className="createAccountButton">create a new Account</button>
    </div>
  );
}

export default Login;
