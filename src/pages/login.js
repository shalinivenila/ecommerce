import React, { useState } from 'react';
import { Button, TextField, InputLabel } from '@mui/material';
import '../pages/login.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const response = await fetch("https://apingweb.com/api/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        const token = data.token;
        localStorage.setItem('token', token);
        navigate(`/`);
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className='form'>
        <h2>Have an account? Sign in</h2>
        <div className='formtable'>
        <InputLabel htmlFor="email" sx={{width:'50%', marginLeft:'25%',marginTop:'20%'}}>
            Email
          </InputLabel>
          <TextField
           sx={{width:'50%',marginLeft:'25%',borderColor:'black'}}
            className='formtab'
            label='Email'
            variant='outlined'
            margin='normal'
            InputLabelProps={{ shrink: false }}
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
           <InputLabel htmlFor="password" sx={{width:'50%', marginLeft:'25%'}}>
            Password
          </InputLabel>
          <TextField
          sx={{width:'50%',marginLeft:'25%'}}
            className='formtabb'
            label='Password'
            variant='outlined'
            margin='normal'
            fullWidth
            type='password'
            InputLabelProps={{ shrink: false }}
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            className='submit'
            style={{ marginLeft: "43%", marginTop: "34px" }}
            type='submit'
            variant="contained"
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
