import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerLogin = () => {

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try{
      const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",
        {
          email,
          password
        },
        {
          withCredentials: true
        }); 

        alert("Partner logged in successfully!");
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
        <h1 className="auth-title">Partner Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              onSubmit={handleSubmit}
              type="password" 
              className="form-input"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Login
          </button>
        </form>
        <Link to="/partner/register" className="auth-link">
          Want to become a partner? Sign up
        </Link>
      </div>
    </div>
  );
};

export default PartnerLogin;