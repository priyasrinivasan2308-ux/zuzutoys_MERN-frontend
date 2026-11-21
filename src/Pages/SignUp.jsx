import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://toy-backend-xsgt.onrender.com/api/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Signup Successful!");

        setName('');
        setEmail('');
        setPassword('');

        navigate('/');
      } else {
        alert(data.message || "Signup Failed!");
      }

    } catch (error) {
      console.log("Signup Error:", error);
      alert("Server Connection Failed!");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={formStyle}>
        <h1 style={{ color: '#FF4081' }}>
          Sign Up 🧸
        </h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Create Account
          </button>

        </form>

        <p>
          Already have an account?
          <span
            onClick={() => navigate('/')}
            style={{ color: '#FF4081', cursor: 'pointer' }}
          >
            {' '}Login
          </span>
        </p>

      </div>
    </div>
  );
}

const pageStyle = {
  backgroundColor: '#FFF9C4',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial'
};

const formStyle = {
  backgroundColor: 'white',
  padding: '35px',
  borderRadius: '15px',
  textAlign: 'center',
  width: '350px',
  boxShadow: '0 2px 10px #ddd'
};

const inputStyle = {
  width: '90%',
  padding: '12px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '15px'
};

const buttonStyle = {
  backgroundColor: '#FF4081',
  color: 'white',
  border: 'none',
  padding: '12px 25px',
  borderRadius: '20px',
  cursor: 'pointer',
  marginTop: '15px',
  fontSize: '16px'
};

export default Signup;