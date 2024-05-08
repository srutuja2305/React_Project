import React, { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import image from '../images/Vector.png';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import pic from '../images/image 32618.png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import spark from '../images/spark.png';


const HomePage=()=>{
    
    const [expanded, setExpanded] = useState([false, false, true, false,false]);

  const handleChange = (panel) => (event, isExpanded) => {
    const newExpanded = [...expanded];
    newExpanded[panel] = isExpanded;
    setExpanded(newExpanded);
  };


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);



    return (
        <>
       <Box display="flex" alignItems="center" justifyContent="space-between" style={{borderRadius:'30px',border:'1px solid #EAEAEA',marginLeft:'10%',marginRight:'10%',
       marginTop:'20px',marginBottom:'0px'}}>
       <img src={image} height='30.5px' width='121px' alt='logo' style={{marginTop:'10px',marginLeft:'5%',marginBottom:'10px',marginRight:'10px'}}/>
       <Button variant="contained" style={{backgroundColor:'white',color:'black',fontFamily:'Manrope',borderRadius:'20px',marginTop:'10px',marginBottom:'10px',
       marginLeft:'auto',marginRight:'10px',textTransform:'capitalize','&:hover': {
        backgroundColor: '#EAEAEA',color: 'black'}}} LinkComponent={Link} to='/login'>
        Get Projects</Button>
       <Button style={{borderRadius:'20px',fontFamily:'Manrope',marginRight:'5%',marginTop: '10px',backgroundColor:'#1C1C1C',color:'white',marginBottom:'10px',
       textTransform:'capitalize','&:hover': { backgroundColor: '#4E4E4E',color:'white'}}}>
        OnBoard Talent</Button>
        <br/>
      </Box>

      <Box style={{marginLeft:'10%',marginRight:'10%'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', 
    maxWidth: '500px', margin: 'auto', height: '40vh'}}>             
    <Typography style={{fontFamily:'Covered By Your Grace',fontSize:'30px',fontWeight: 400,opacity:'0.6',
              lineHeight:'39.6px',letterSpacing:'-0.02em',textAlign:'left',color:'green'}}>Sucess Stories</Typography>
            <Typography style={{fontFamily:'Manrope',fontSize:'40px',fontWeight: 600,lineHeight:'40.2px',       
                letterSpacing:'-0.02em',textAlign:'center'}}>Every sucess journey we've encountered.</Typography>
       </div>       
       <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{flex:1}}>
            <img src={pic} alt="picture" style={{borderRadius:'10px',height:410,width:400,marginLeft:'20%'}}/>
            <div style={{position: 'absolute', top: 500,left:'10%',borderRadius:'10px',border:'1px solid #80808036',width:'100%',
            maxWidth:180,backgroundColor:'white'}}>
            <img src={spark} height={40} width={40} style={{marginBottom:'0px',marginTop:'10px'}}/>
           <Typography style={{fontFamily:'Manrope',fontSize:'24px',fontWeight: 600,marginLeft:'10px',marginTop:'-20px'}}>40%</Typography>
            <Typography style={{fontFamily:'Manrope',fontSize:'15px',opacity:0.6,marginLeft:'10px'}}>Achieved
             reduction in project execution time by optimising team availability</Typography>
            </div> 
            <div style={{position: 'absolute', top: 700,left:'10%',display:'flex',borderRadius:'50px',border:'1px solid #80808036',
            width:'100%',maxWidth:250,backgroundColor:'white'}}>
                <div>
                <IconButton style={{backgroundColor:'#EAEAEA',marginLeft:'10px',marginTop:'10px'}}><RocketLaunchIcon style={{color:'#2DA950'}}/></IconButton>
                </div>
                <div>
                <Typography style={{fontFamily:'Manrope',fontSize:'16px',fontWeight: 700,lineHeight:'27.32px',marginLeft:'10px'}}>10 DAYS</Typography>
                <Typography style={{fontFamily:'Manrope',fontSize:'16px',fontWeight: 500,lineHeight:'27.32px',marginLeft:'10px'}}>Staff Deployment</Typography>
                </div>         
            </div>
            <div style={{position: 'absolute', top: 720,left:'35%',borderRadius:'10px',border:'1px solid #80808036',width:'100%',
            maxWidth:230,backgroundColor:'#246324'}}>
                <Typography style={{fontFamily:'Manrope',fontSize:'26px',fontWeight: 800,lineHeight:'27.32px',marginLeft:'20px',color:"white",marginTop:'10px'}}>$0.5
                <Typography component="span" style={{fontSize:'18px',fontWeight:400,marginLeft:'5px'}}>MILLION</Typography></Typography>
                <Typography style={{fontFamily:'Manrope',fontSize:'15px',lineHeight:'27.32px',marginLeft:'20px',color:"white"}}>Reduced client expenses by saving on hiring and employee costs.</Typography>
            </div>
        </div>
        <div style={{flex:1,marginLeft:'12%'}}>
            <Typography style={{fontFamily:'Manrope',fontSize:'40px',fontWeight: 600,lineHeight:'40.2px',marginTop:'10%',       
                letterSpacing:'-0.02em'}}>Enhance fortune 50 company’s insights teams research capabilities</Typography>
             <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        <div className="slide" style={{ flex: '0 0 100%' }}></div>
        <div className="slide" style={{ flex: '0 0 100%' }}></div>
        <div className="slide" style={{ flex: '0 0 100%' }}></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'left', marginTop: '3%' }}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: activeIndex === index ? 'green' : '#ccc',
              margin: '0 5px',
            }}
          ></div>
        ))}
      </div>
    </div>
                <Button variant="contained" style={{fontFamily:'Manrope',borderRadius:'20px',backgroundColor:'#1C1C1C',color:'white',
 textTransform:'capitalize',marginTop:'10%','&:hover': { backgroundColor: '#4E4E4E',color:'white'}}}>Explore More<ArrowCircleRightIcon/></Button>
        </div>
       </div>
      </Box>

      <Box style={{borderRadius:'10px',marginTop:'8%',border:'1px solid #EAEAEA',
      backgroundColor:'#EAEAEA',marginLeft:'10%',marginRight:'10%',marginBottom:'20px',display:'flex'}}>
        <div style={{marginLeft:'5%',marginRight:'5%'}}>
        <Typography style={{fontFamily:'Covered By Your Grace',fontSize:'28px',fontWeight: 400,opacity:'0.6',
              lineHeight:'39.6px',letterSpacing:'-0.02em',textAlign:'left',color:'black'}}>What's on your mind</Typography>
            <Typography style={{fontFamily:'Manrope',fontSize:'36px',fontWeight: 600,lineHeight:'39.2px',       
                letterSpacing:'-0.02em',textAlign:'left'}}>Ask Questions</Typography>
        </div>
        <div style={{marginRight:'5%',marginTop:'5%'}}>
        <Accordion expanded={expanded[0]} onChange={handleChange(0)}>
        <AccordionSummary
         expandIcon={expanded[0] ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: '#EAEAEA' }}
        >
          <Typography style={{fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px'}}>Do you offer freelancers?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'15px',opacity:0.7,lineHeight:'27.32px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[1]} onChange={handleChange(1)}>
        <AccordionSummary
         expandIcon={expanded[1] ? <RemoveIcon /> : <AddIcon />}
         aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px'}}>What’s the guarantee that I will be satisfied
with the hired talent?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'15px',opacity:0.7,lineHeight:'27.32px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded expanded={expanded[2]} onChange={handleChange(2)}>
        <AccordionSummary
         expandIcon={expanded[2] ? <RemoveIcon /> : <AddIcon />}
         aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px'}}>Can I hire multiple talents at once?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'15px',opacity:0.7,lineHeight:'27.32px'}}>
          If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[3]} onChange={handleChange(3)}>
        <AccordionSummary
         expandIcon={expanded[3] ? <RemoveIcon /> : <AddIcon />}
         aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px'}}>Why should I not go to an agency directly?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'15px',opacity:0.7,lineHeight:'27.32px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginBottom:'20px'}} expanded={expanded[4]} onChange={handleChange(4)}>
        <AccordionSummary
         expandIcon={expanded[4] ? <RemoveIcon /> : <AddIcon />}
         aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'18px',fontWeight: 500,lineHeight:'27.32px'}}>Who can help me pick a right skillset
and duration for me?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#EAEAEA' }}>
          <Typography style={{fontFamily:'Manrope',fontSize:'15px',opacity:0.7,lineHeight:'27.32px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between" style={{borderRadius:'30px',border:'1px solid #EAEAEA',
      backgroundColor:'#EAEAEA',marginLeft:'10%',marginRight:'10%',marginTop:'30px',marginBottom:'20px'}}>
         <Typography style={{display: 'flex', alignItems: 'center', fontFamily:'Manrope',fontSize:'14px',fontWeight: 400,
         lineHeight:'19.8px',marginLeft:'10%',marginTop:'1%',marginBottom:'1%'}}>
      <CopyrightIcon style={{opacity:0.5}}/><span>Talup 2023. All rights reserved</span></Typography>
       <Typography style={{fontFamily:'Manrope',fontSize:'14px',fontWeight: 400,lineHeight:'19.8px',
          textAlign:'left',marginLeft:'auto',marginRight:'10px'}}><Link to='/terms' style={{color:'inherit'}}>Terms & Conditions</Link></Typography>
        <Typography style={{fontFamily:'Manrope',fontSize:'14px',fontWeight: 400,lineHeight:'19.8px',marginRight:'10%'}}>
           <Link to='/privacy' style={{color:'inherit'}}>Privacy Policy</Link> </Typography>
      </Box>
        </>
    );
}
export default HomePage;