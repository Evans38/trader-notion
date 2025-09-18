import React from "react";
import { useState } from "react";

import "./Login.css";

function Login() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="login-container">
      <div className="intro-section">
        <h1>Trader Notion</h1>
        <p>Your personal trading journal and analytics dashboard.</p>
        <button onClick={() => setShowForm(true)}>Get Started</button>
      </div>
      {showForm && (
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
