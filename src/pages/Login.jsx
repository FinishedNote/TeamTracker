import React, { useState } from "react";
import supabase from "../supabaseClient";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
    } else {
      if (isCheck) {
        supabase.auth.setSession({ persistSession: true });
      } else {
        supabase.auth.setSession({ persistSession: false }); // TODO: debug cette ligne <---
      }
      navigate("/dashboard");
    }
  };
  const handleGoogleLogin = () => {
    console.log("ok");
  };

  return (
    <div className="l-container">
      <form onSubmit={(e) => handleSubmit(e)} className="login">
        <h1>Welcome back</h1>
        <p>Welcome back! please enter your details.</p>
        <div className="inputs">
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
            Forgot password? <NavLink to="/reset-password">Click here</NavLink>
          </span>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <button type="button" className="google-login-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="google-img"
          />
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
