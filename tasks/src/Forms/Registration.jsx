import React, { useState } from 'react';
import './css/forms.css';
import logo from "./images/icon.png";
const Registration = ({ toggle }) => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: '',
        gender: "",
        termsAccepted: false
    });

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: '',
        termsAccepted: ''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setUser({ ...user, [name]: type === 'checkbox' ? checked : value });
    };

    const validateUsername = (username) => {
        const isValid = /^[a-zA-Z0-9_]{5,}$/.test(username);
        setValidationErrors((prevErrors) => ({ ...prevErrors, username: isValid ? '' : '*Please enter a valid username.' }));
    };

    const validateEmail = (email) => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setValidationErrors((prevErrors) => ({ ...prevErrors, email: isValid ? '' : '*Please enter a valid email address.' }));
    };

    const validatePassword = (password) => {
        const isValid = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/.test(password);
        setValidationErrors((prevErrors) => ({ ...prevErrors, password: isValid  ? '' : '*Please enter a valid password.' }));
    };
    
    const validateConfirmPassword = () => {
        const isValid = user.password === user.confirmPassword;
        setValidationErrors((prevErrors) => ({...prevErrors,
            confirmPassword: isValid ? '' : '*Passwords do not match.'
        }));
    };

    const validateGender = () => {
        setValidationErrors((prevErrors) => ({ ...prevErrors, gender: user.gender ? '' : '**Please select your gender.' }));
    };

    const validateTerms = () => {
        setValidationErrors((prevErrors) => ({ ...prevErrors, termsAccepted: user.termsAccepted ? '' : '*You must accept the terms and conditions.' }));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const isValid = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
        setValidationErrors((prevErrors) => ({ ...prevErrors, phoneNumber: isValid ? '' : '*Please enter a valid 10-digit phone number.' }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateUsername(user.username);
        validateEmail(user.email);
        validatePassword(user.password);
        validatePhoneNumber(user.phoneNumber)
        validateTerms();
        validateGender();
        validateConfirmPassword(user.confirmPassword);
        console.log(user);
    };

    return (
        <div className="Container">
            <form action="" className='form' >

                <label htmlFor=""> UserName:</label><input type="text" placeholder="Username" name="username" onBlur={(e) => validateUsername(e.target.value)} onChange={handleChange} value={user.username} />
                <span className="error">{validationErrors.username}</span>
                <label htmlFor="">Email:</label><input type="email" placeholder="Email" name="email" onBlur={(e) => validateEmail(e.target.value)} onChange={handleChange} value={user.email} />
                <span className="error">{validationErrors.email}</span><br />
                <label htmlFor="">Ph.no</label>
                <input type="text" name="" placeholder="Phone number" style={{ width: "100%", marginRight: "10px" }} maxLength={10} />
                <span className="error">{validationErrors.phoneNumber}</span>
               <label htmlFor="">DOB</label>
                <input type="date" name="" style={{ width: "100%", height: '30px' }} /><br />

                <label htmlFor="">Gender:</label><div className="radioButtons">
                    <div>
                        <input type="radio" name="gender" value="male" onChange={handleChange} />Male
                    </div>
                    <div>
                        <input type="radio" name="gender" value="female" onChange={handleChange} />Female
                    </div>
                </div>
                <span className="error">{validationErrors.gender}</span>
                <br />
                <label htmlFor="">Country:</label>
                <select name="" style={{ width: "100%", height: '30px' }}>Country
                    <option value="">India</option>
                    <option value="">England</option>
                    <option value="">USA</option>
                    <option value="">Canada</option>
                </select><br /><br />
                <label htmlFor="">Password:</label>
                <div className="pwd">
                    <input type="password" name="password" placeholder='Password' onBlur={(e) => validatePassword(e.target.value)} onChange={handleChange} value={user.password} />
                    <input type="password" placeholder='Confirm Password' name="confirmPassword" onChange={handleChange}
                        value={user.confirmPassword} onBlur={(e) => validateConfirmPassword(e.target.value)}/> <br />
                </div>
                <span className="error" style={{ width: "100%", height: '30px' }}>{validationErrors.password}</span>
                <span className="error">{validationErrors.confirmPassword}</span>
                <br /><br />
                <label htmlFor="">Address:</label>
                <textarea name="" cols="5" rows="5" placeholder='Address' style={{ width: "100%" }}></textarea>

                <div className="terms">
                    <label htmlFor="">
                        <input type="checkbox" name="termsAccepted" checked={user.termsAccepted} onChange={handleChange} />
                    </label>
                    <p> Terms & Conditions</p>
                </div>
                {validationErrors.termsAccepted && <span className="error">{validationErrors.termsAccepted}</span>}
                <button type="submit" onClick={handleSubmit}>Register</button>
                <center>
                    <p>Already Have an Account? <a onClick={toggle}> Login Here</a></p>
                </center>
            </form>
            <div className="image">
                <center><h1>Register Now</h1></center>
                <center><p>Fill the form</p></center>
                <br />
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Registration;
