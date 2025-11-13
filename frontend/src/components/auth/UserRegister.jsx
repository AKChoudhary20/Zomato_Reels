import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get input values using 'name' attributes
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:3000/api/auth/user/register", //we are using axios to request the server to register the user by sending the data to the server
        {
          fullName: firstName + " " + lastName,
          email,
          password
        },{
          withCredentials: true //we need withCredentials to be true to have the token in the cookie when we are using axios to request the server
        }
      );
      alert("User registered successfully!"); 

      console.log(response.data);
      
      navigate("/");
    }
     catch (error)
      { 
      console.error(error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">User Registration</h1>
        <div className="registration-type">
          <span>Register as: </span>
          <Link to="/register" className="type-link active">User</Link>
          <span className="separator">•</span>
          <Link to="/partner/register" className="type-link">Food Partner</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input 
                type="text" 
                name="firstName"
                className="form-input"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                className="form-input"
                placeholder="Enter last name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password"
              className="form-input"
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
        <Link to="/login" className="auth-link">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
};

export default UserRegister;
