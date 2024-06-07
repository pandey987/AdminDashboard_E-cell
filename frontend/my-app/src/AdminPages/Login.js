import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/admin/login', {
        username,
        password
      });
      // Handle the response from the server
      console.log(response.data);
      if (response.data.status===200) {
        // Redirect to the admin dashboard or another page
        window.location.href = '/admin/dashboard';
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setError('An error occurred while trying to log in');
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="col-6 offset-2 mb-3">Admin Login in E-Cell</h2>

        <div className="col-8 offset-2">
          <form className="needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Enter Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="invalid-feedback">Username is required</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="invalid-feedback">Password is required</div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-dark add-btn mb-3">Login</button>
            <a href="/reset">Reset-Password/username</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
