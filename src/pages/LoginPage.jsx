import React from "react";
import { useState } from "react";

import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login attempted with:", { email, password });
    alert(`Attempting login for: ${email}`);
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <h1>Trader-notion</h1>
      </div>
      <div className="formCard">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="showPassword-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
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

export default LoginPage;
