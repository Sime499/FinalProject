import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import './signIn.css';

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
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

      <div className ="signinText">
        <button type="submit" className="SignIn-btn">
          Sign In
        </button>
      </div>
      <div className="registercss">
        New User? {""}
        <div>
        <Link to="/Register">Register Here</Link>
        </div>
      </div>
    </form>
    
  );
}