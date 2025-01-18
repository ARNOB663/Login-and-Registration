import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    axios.post('http://localhost:3001/login', { email, password })
      .then(res => {
        console.log(res);
        // Navigate to the dashboard or home page after successful login
        navigate('/home');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '24rem' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
          </form>
          <div className="text-center">
            <p>Don't have an account?</p>
            <Link to="/register" className="btn btn-secondary">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;