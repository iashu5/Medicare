import React, { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 6000); // 4 seconds

    // Cleanup the timer if the component is unmounted before the time is up
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box 
      m="20px" 
      sx={{
        padding: '20px', 
        justifyContent: 'center', 
        textAlign: 'center'
      }}
    >
      <img 
        src="/assets/payment.jpg" 
        alt="Payment-logo" 
        style={{
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          objectFit: 'cover',
          marginTop:'10vh'
        }} 
      />
      <Typography variant="h1" gutterBottom marginTop={"36px"} style={{color:"#035547", fontWeight:"bold"}}>
        Thank You!
      </Typography>
      <Typography variant="h4">Payment done Successfully</Typography>
      <Typography marginTop={"40px"}>You will be redirected to the home page shortly
         or click here to return to home page</Typography>
      <Button 
        variant="contained" 
        sx={{ 
          mt: 4, 
          borderRadius: '20px', 
          padding: '10px 20px', 
          textTransform: 'none',
          backgroundColor: '#4CAF50', // Custom background color
          color: '#FFFFFF', // Custom text color
          '&:hover': {
            backgroundColor: '#45A049', // Hover effect background color
          }
        }}
        href="/"
      >
        Return to Home Page
      </Button>
    </Box>
  );
};

export default PaymentSuccess;
