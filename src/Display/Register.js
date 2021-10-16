import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/SignInAction";
import "./signIn.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Password and confirm password is not match`);
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <form className="inner-container" onSubmit={submitHandler}>
      <div className="title">Register</div>
      <div className="input-register">
        <input
          type="text"
          name="name"
          className="Name-input"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          className="SignIn-input"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          className="SignIn-input"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="confirmPassword"
          name="confirmPassword"
          className="SignIn-input"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit" className="RegisterBtn">
          Register
        </button>
      </div>
      <div className="register">
        Already have an account?
        <Link to="/SignIn">Sign In </Link>
      </div>
    </form>
  );
}
