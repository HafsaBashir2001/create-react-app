import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Create a user object with the email and password values
    const user = {
      email: email,
      password: password
    };
  
    // Send a POST request to your backend API
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok) {
        // Registration successful, handle the response accordingly
        // e.g. show a success message, redirect to login page, etc.
        console.log('Registration successful');
      } else {
        // Registration failed, handle the error response
        // e.g. show an error message, clear form inputs, etc.
        console.error('Registration failed');
      }
    })
    .catch(error => {
      // Handle any network or server errors
      console.error('Error occurred during registration:', error);
    });
  };
  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
