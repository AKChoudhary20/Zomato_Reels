import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const PartnerRegister = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  const businessName = e.target.name.value;
  const contactName = e.target.contactName.value;
  const phone = e.target.phone.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const address = e.target.address.value;
  try{
    const response = await axios.post("http://localhost:3000/api/auth/food-partner/register",
      {
        name: businessName,
        contactName,
        phone,
        email,
        password,
        address
      },
      {
        withCredentials: true
      }); 
      alert("Partner registered successfully!");
      console.log(response.data);
      
        navigate("/create-food");
  }
  catch(error){
    console.log(error);
  }
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Partner Registration</h1>
        <div className="registration-type">
          <span>Register as: </span>
          <Link to="/register" className="type-link">User</Link>
          <span className="separator">•</span>
          <Link to="/partner/register" className="type-link active">Food Partner</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Business Name</label>
            <input 
              type="text" 
              className="form-input"
              placeholder="Enter business name"
              name="name"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Contact Name</label>
              <input 
                type="text" 
                className="form-input"
                placeholder="Enter contact name"
                name="contactName"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input 
                type="tel" 
                className="form-input"
                placeholder="Enter phone number"
                name="phone"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input"
              placeholder="Enter business email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input"
              placeholder="Create a password"
              name="password"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Address</label>
            <textarea 
              className="form-input"
              rows="3"
              placeholder="Enter business address"
              name="address"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
        <Link to="/partner/login" className="auth-link">
          Already a partner? Sign in
        </Link>
      </div>
    </div>
  );
};

export default PartnerRegister;