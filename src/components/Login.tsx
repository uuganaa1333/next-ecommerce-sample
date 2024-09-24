'use client';

import React, { useState } from 'react';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Logs the response with the token
        if (json.token) {
          // Save the token in a cookie (valid for 1 day)
          document.cookie = `token=${json.token}; path=/; max-age=${60 * 60 * 24}`;
        }
      })
      .catch((error) => alert('Username or password is incorrect'));
  };
  console.log(formData.username, 'fd');
  return (
    <div className="max-w-[500px] mx-auto">
      Login
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block " htmlFor="username">
            Username:
          </label>
          <input
            className="border border-black "
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div>
          <label className="block " htmlFor="username">
            Password:
          </label>
          <input
            className="border border-black "
            type="password"
            name="username"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div>
          <input type="submit" value={'Login'} />
        </div>
      </form>
    </div>
  );
};

export default Login;
