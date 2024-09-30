import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link, Typography, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WelcomeDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(0);
  };

const isLargeScreen = useMediaQuery('(min-height: 1280px)');
const isMediumScreen = useMediaQuery('(min-height: 800px)');


  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
    {isMediumScreen ? (            
        <DialogContent
          style={{
            position: 'relative',
            backgroundImage: 'url(/img/welcome.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '5em',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            gap: '50px',
            overflow: 'hidden', // Add this line to make it unscrollable
          }}
        >
          <img src='/img/Artboard.png' alt='logo' width='210px' height='158px' />
          <DialogContentText id="alert-dialog-slide-description" style={{ color: 'white' }}>
            <Typography style={{ fontSize: '34px', fontFamily: "'SF Pro Display', sans-serif", fontWeight:600  }}>Ready to Develop<br /> Something Brilliant?</Typography>
            <Typography style={{ marginTop: '3em', fontFamily: "'SF Pro Display', sans-serif", fontSize: '20px', }}>VisAutoML helps you turn your data into <br />
               clear, interactive models and visualizations</Typography>
          </DialogContentText>
          <Button variant='contained' style={{ padding: '20px 40px', width: '70%', fontFamily: "'SF Pro Display', sans-serif", fontSize: '16px' }} onClick={() => dispatch({ type: "TOGGLE_MODE", payload: 2 })}>START A QUICK TOUR</Button>
          <Link style={{ color: '#20E8FF', textDecoration: 'none', cursor: 'pointer', fontSize: '16px' }} onClick={() => dispatch({ type: "TOGGLE_MODE", payload: -1 })}>Skip the tour</Link>
        </DialogContent>
        
       ) : (      
        <DialogContent
          style={{
            height: '600px',
            position: 'relative',
            backgroundImage: 'url(/img/welcome.png)',
            // backgroundSize:'cover', 
            backgroundPosition: 'center',
            padding: '5em',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            gap: '40px',
            overflow: 'hidden', // Add this line to make it unscrollable
          }}
        >
          <img src='/img/Artboard.png' alt='logo' width='118.125px' height='89.0625px' />
          <DialogContentText id="alert-dialog-slide-description" style={{ color: 'white' }}>
            <Typography style={{ fontSize: '25px', fontFamily: "'SF Pro Display', sans-serif", fontWeight:600  }}>Ready to Develop<br /> Something Brilliant?</Typography>
            <Typography style={{ marginTop: '2em', fontFamily: "'SF Pro Display', sans-serif", fontSize: '15px', }}>VisAutoML helps you turn your data into <br />
               clear, interactive models and visualizations</Typography>
          </DialogContentText>
          <Button variant='contained' style={{ padding: '20px 40px', width: '70%', fontFamily: "'SF Pro Display', sans-serif", fontSize: '10px' }} onClick={() => dispatch({ type: "TOGGLE_MODE", payload: 2 })}>START A QUICK TOUR</Button>
          <Link style={{ color: '#20E8FF', textDecoration: 'none', cursor: 'pointer', fontSize: '11px' }} onClick={() => dispatch({ type: "TOGGLE_MODE", payload: -1 })}>Skip the tour</Link>
        </DialogContent>
      
      )}
      </Dialog>  
      </React.Fragment>
  );
}

export default WelcomeDialog;