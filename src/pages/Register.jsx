import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="r-container">
      <form onSubmit={(e) => handleSubmit(e)} className="register">
        <h1>Welcome</h1>
        <p>Welcome! please enter your details.</p>
        <div className="inputs">
          <label htmlFor="name">Enter your name</label>
          <div className="inp">
            <input type="text" placeholder="Name" id="name" required />
            <select name="default">
              <option value="coach">Coach</option>
              <option value="player">Player</option>
            </select>
          </div>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            defaultValue={email}
            id="email"
            placeholder="Email"
            onChange={(prev) => setEmail(prev.currentTarget.value)}
            required
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            defaultValue={password}
            id="password"
            placeholder="Password"
            onChange={(prev) => setPassword(prev.currentTarget.value)}
            required
          />
          <div className="remember-me">
            <input
              type="checkbox"
              value={isCheck}
              id="rememberme"
              onChange={() => setIsCheck(!isCheck)}
            />
            <label htmlFor="rememberme" className="checkmark"></label>
            <label htmlFor="rememberme">Remember me</label>
          </div>
          <span>
            Already have an account?
            <NavLink to="/reset-password"> Click here</NavLink>
          </span>
        </div>
        <button type="submit" className="register-btn">
          Sign up
        </button>
        <button type="button" className="google-register-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="google-img"
          />
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
