import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import image from '../images/Vector.png';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ErrorIcon from '@mui/icons-material/Error';


const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name should not be empty';
    }
    if (!email.trim()) {
      newErrors.email = 'Email should not be empty';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Enter valid Email Address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      try {
        console.log(name,email);
        const response = await axios.post('http://localhost:5000/login', { name, email });
        console.log('Form submitted successfully',response);
        navigate('/success'); // Navigate to the next page
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };


  return (
    <>
    <Box display="flex" alignItems="center" justifyContent="space-between" style={{marginBottom:'10%'}}>
      <img src={image} height='30.5px' width='121px' alt='logo' style={{marginTop:'50px',marginLeft:'10%'}}/>
      <IconButton LinkComponent={Link} to='/' style={{borderRadius:'100%',border:'1px solid grey',marginRight:'10%',marginTop: '50px'}}><CloseIcon fontSize='medium' style={{color:'black'}}/></IconButton>
    </Box>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', 
    maxWidth: '500px', margin: 'auto', height: '50vh'}}>
        <Typography style={{fontFamily:'Covered By Your Grace',fontSize:'30px',fontWeight: 400,opacity:'0.6',
              lineHeight:'39.6px',letterSpacing:'-0.02em',textAlign:'left',color:'green'}}>
                Registration Form</Typography>
        <Typography style={{fontFamily:'Manrope',fontSize:'40px',fontWeight: 600,lineHeight:'67.2px',       
                letterSpacing:'-0.02em',textAlign:'center'}}>
                  Start your sucess Journey here!</Typography>
        <TextField name='fullname' placeholder='Enter your name' required fullWidth  
        value={name} onChange={handleNameChange}
        InputProps={{ style: { borderRadius: '50px' ,fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px',
paddingLeft:'20px',backgroundColor:'#EFEFEF',color:' #827A7A'} }}/>
        {errors.name && <Typography style={{ color: 'red', textAlign: 'center', marginTop: '8px' }}><ErrorIcon/>{errors.name}</Typography>}
        <br/>
        <TextField type='email' name='email' placeholder='Enter your email' required fullWidth 
                value={email} onChange={handleEmailChange}
            InputProps={{ style: { borderRadius: '50px' ,fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px',
paddingLeft:'20px',backgroundColor:'#EFEFEF',color:' #827A7A'} }}/>        
            {errors.email && <Typography style={{fontFamily:'Manrope',fontWeight:500, color: 'red', textAlign: 'center', marginTop: '8px', display: 'flex', alignItems: 'center' }}>
              <ErrorIcon fontSize='medium' style={{ marginRight: '5px' }}/>{errors.email}</Typography>}

         <br/>
        <Button variant='contained' type='submit' fullWidth   onClick={handleSubmit}
          disabled={!name.trim() || !email.trim() || !!errors.name || !!errors.email}
       style={{borderRadius:'50px',fontFamily:'Manrope',fontSize:'18px',fontWeight: 600,textAlign:'center', textTransform: 'capitalize',
  backgroundColor: !name.trim() || !email.trim() ? '#EFEFEF' : '#1C1C1C', color: 'white',
  '&:hover': { backgroundColor: (!name.trim() || !email.trim() ) ? '#EFEFEF' : 'pink' } }}>
          Submit</Button>
    </div>
    </>
  )
}

export default LoginPage