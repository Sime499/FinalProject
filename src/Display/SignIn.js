import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/SignInAction";
import "./signIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <form className="inner-container" onSubmit={submitHandler}>
      <div className="title">SignIn</div>
      <div className="input-group">
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
      </div>

      <div>
        <button type="submit" className="SignIn-btn">
          Sign In
        </button>
      </div>
      <div className="register">
        New User {""}
        <Link to="/Register">Register</Link>
      </div>
    </form>
  );
}
