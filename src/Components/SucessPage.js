import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import image from '../images/Vector.png';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';

const SucessPage = () => {

  const navigate = useNavigate();
  const [redirectTime, setRedirectTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setRedirectTime((prevTime) => prevTime - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);


  return (
    <>
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <img src={image} height='30.5px' width='121px' alt='logo' style={{marginTop:'50px',marginLeft:'10%'}}/>
      <IconButton LinkComponent={Link} to='/' style={{borderRadius:'100%',border:'1px solid grey',marginRight:'10%',marginTop: '50px'}}><CloseIcon fontSize='medium' style={{color:'black'}}/></IconButton>
    </Box>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', 
    maxWidth: '500px', margin: 'auto', height: '40vh'}}>       
     <CheckCircleRounded fontSize='large' style={{color:'green'}}/>
     <Typography style={{fontFamily:'Covered By Your Grace',fontSize:'30px',fontWeight: 400,opacity:'0.6',
              lineHeight:'39.6px',letterSpacing:'-0.02em',textAlign:'left',color:'green'}}>
          Success Submitted</Typography>
          <Typography style={{fontFamily:'Manrope',fontSize:'40px',fontWeight: 600,lineHeight:'67.2px',       
                letterSpacing:'-0.02em',textAlign:'center'}}>
          Congratulations</Typography>
        <Typography style={{fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px',textAlign:'center',opacity:0.6}}>
          Your request has been successfully submitted to us.We will validate your information and reach out to your shortly with updates.</Typography>
    </div>
    <Typography style={{fontFamily:'Manrope',fontSize:'16px',fontWeight: 500,lineHeight:'27.32px',opacity:0.6,textAlign:'center'}}>
      Redirecting you to HomePage in <Typography  component="span" style={{fontWeight:600}}>{redirectTime} Seconds
      </Typography></Typography>
    </>
  )
}

export default SucessPage