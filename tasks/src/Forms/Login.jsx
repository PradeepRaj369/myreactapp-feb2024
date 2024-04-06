import React, { useState } from 'react';
import './css/forms.css';
import logo1 from "./images/Hire.png";

const Login = ({ toggle }) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [validationErrors, setValidationErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({...prevUser,[name]: value}));
  };

  const validateUsername = () => {
    const isValid = /^[a-zA-Z0-9_]{5,}$/.test(user.username);
    setValidationErrors(prevErrors => ({
      ...prevErrors,
      username: isValid ? '' : '*Please enter a valid username.'
    }));
  };

  const validatePassword = () => {
    const isValid = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/.test(user.password);
    setValidationErrors(prevErrors => ({
      ...prevErrors,
      password: isValid ? '' : '*Please enter a valid password.'
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateUsername();
    validatePassword();
  };

  return (
    <div className='Container'>
      <div className="image">
        <img src={logo1} alt="" />
      </div>
      <form className='form'>
        <h3>Login Form</h3>
        <center><p>Enter Your Credentials</p></center>
        <br />
        <input type="text" name="username" placeholder='Username' onBlur={validateUsername} onChange={handleChange} />
        <span className="error">{validationErrors.username}</span><br /><br />
        <input type="text" name="password" placeholder='Enter Password' onBlur={validatePassword} onChange={handleChange} />
        <span className="error">{validationErrors.password}</span>
        <button type="submit" onClick={handleSubmit}>Login</button>
        <center><p>Don't Have an Account? <a onClick={toggle}>SignUp Here</a></p></center>
      </form>
    </div>
  );
};

export default Login;
