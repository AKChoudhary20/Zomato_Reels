import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/user/login',
        {
          email: e.target.email.value,
          password: e.target.password.value
        },
        { withCredentials: true }
      );

      console.log('login response', res.data); // DEBUG: confirm token shape

      // adjust key name to match backend response (token, accessToken, etc.)
      const token = res.data?.token || res.data?.accessToken || null;
      if (token) {
        localStorage.setItem('token', token);
        // navigate after storing token
        navigate('/');
        return;
      }

      // If backend uses HttpOnly cookie (no token returned),
      // set a small flag so frontend knows login succeeded:
      if (res.status === 200) {
        localStorage.setItem('token', 'logged-in'); // temporary flag
        navigate('/');
        return;
      }

      // handle login error UI
      console.error('Login did not return token');
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">User Login</h1>
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
              type="password" 
              className="form-input"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <Link to="/register" className="auth-link">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;