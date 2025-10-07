import React from "react";

import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="formCard">
        <form>
          <input type="text" placeholder="email" />
          <div className="password-container">
            <input type="password" placeholder="Password" />
            <button className="showPassword-btn">Show</button>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
          <div className="links-group">
            <a href="#forgot" className="link">
              Forgot Password?
            </a>
            <a href="#signup" className="link">
              Don't have an account?
              <srong>Sign Up</srong>
            </a>
          </div>
        </form>
        <div className="divider">OR</div>
        <button className="social-btn">Continue with google</button>
        <button className="social-btn">Continue with apple </button>
      </div>
    </div>
  );
}

export default Login;
