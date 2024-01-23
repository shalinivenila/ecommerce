import React, {useState} from 'react';
import '../pages/registration.css';
import { useNavigate } from 'react-router-dom';
import { Button, FormControlLabel, TextField, InputLabel} from '@mui/material';

const Form = () =>{
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[phone,setPhone] = useState('')
  const[password,setPassword] = useState('');
  const[confirmpassword,setConfirmpassword] = useState('');
  
 const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName (e.target.value)
  };
  const handleEmailChange = (e) => {
    setEmail (e.target.value)
  };
  const handlePhoneChange = (e) => {
    setPhone (e.target.value)
  };
  const handlePasswordChange = (e) => {
      setPassword (e.target.value)
    };
  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword (e.target.value)
    };

  const handlenavigateChange = (e) =>{
    navigate(`/login`);
  }
  
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
  
      try {
        const response = await fetch("https://apingweb.com/api/register", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name:name,
            email: email,
            phone:phone,
            password: password,
            password_confirmation:confirmpassword,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          navigate(`/login`);
        } else {
          const errorData = await response.json();
          console.error("Login failed:", errorData);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
  





  return(
    <div>
      <div className='form'>
<h2 style={{cursor:"pointer"}} onClick={handlenavigateChange}>Have an account? Sign in </h2>

<div className='formtable'>
<InputLabel htmlFor="name" sx={{marginLeft:'25%',width:'50%',marginTop:'20px',paddingTop:'0px'}}>
Name
</InputLabel>
<TextField 
sx={{width:'50%',marginLeft:'25%'}} 
margin='normal' 
className='formtab' 
InputLabelProps={{ shrink: false }}
label='Name'
 variant='outlined'
  placeholder='Name' 
  fullWidth value={name} 
onChange={handleNameChange}/>
<InputLabel htmlFor="email" sx={{marginLeft:'25%',marginTop:'20px'}}>
Email
</InputLabel>
<TextField sx={{width:'50%',marginLeft:'25%',marginTop:'20px',borderColor:'none'}} 
margin='normal'
 className='formtab' 
 InputLabelProps={{ shrink: false }}
 label='Email'
  variant='outlined'
   placeholder='Email'
    fullWidth value={email} 
    onChange={handleEmailChange}/>
<InputLabel htmlFor="phone" sx={{marginLeft:'25%',marginTop:'4px'}}>
Phone
</InputLabel>
<TextField sx={{width:'50%',marginLeft:'25%'}}
 margin='normal'
  className='formtab'
  InputLabelProps={{ shrink: false }}
   label='Phone' 
   variant='outlined' 
   placeholder='Phone'
    fullWidth value={phone} 
    onChange={handlePhoneChange}/>
<InputLabel htmlFor="password" sx={{marginLeft:'25%',}}>
Password
</InputLabel>
<TextField sx={{width:'50%',marginLeft:'25%'}}
 margin='normal'
  placeholder='Password'
  InputLabelProps={{ shrink: false }}
   label='Password' 
   variant='outlined'
    fullWidth value={password} 
    onChange={handlePasswordChange}/>
<InputLabel htmlFor="confirmpassword" sx={{marginLeft:'25%'}}>
confirm password
</InputLabel>
<TextField sx={{width:'50%',marginLeft:'25%'}}
 margin='normal' 
 className='formtab' 
 InputLabelProps={{ shrink: false }}
 label='Confirm Password' 
 variant='outlined' 
 placeholder='Confirm Password'
  fullWidth value={confirmpassword} 
  onChange={handleConfirmPasswordChange}/>
<Button className='submit' style={{marginLeft:"43%",marginTop:"34px"}} type='submit' onClick={handleLogin} variant="contained" >LOGIN</Button>
  
 
</div>

      

      </div>
    
    </div>

    
  )
}

export default Form;
