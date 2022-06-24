import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import SmButtton from '../components/smButtton';
import SmInput from '../components/smInput';
import { useState, useNavigate } from 'react';
import { sendData, signUpUser } from '../configuration/firebase/firebaseMethods';
import {

  Link
} from "react-router-dom";
import "./add.css"
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function Add() {

  const [userObj, setUserObj] = useState({});
  const [open, setOpen] = React.useState(false);

  const Save = () => {
    if (!userObj.email) {
      alert("Email is required.");
      return
    };
    if (!userObj.password || userObj.password.length < 6) {
      alert("password is required and Password must be greater then 6 character");
      return
    };

    console.log(userObj);

    // signUpUser(userObj).then((res) => {
    //   console.log(res)

      sendData(userObj, "StudentData").then(() => {
        setOpen(true);
        console.log("Data Saved Succcessfully")
        window.location.reload(false);

      }).catch((err) => {
      console.log(err)
    });





  };

  


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );






  return (
    <>
<div className='main'>
  <div className='centerDiv'>
      <Typography variant='h3'>Add Student Data</Typography>
    
  <Box sx={{ marginTop: "25px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, name: e.target.value })} label="Student Name" type="text" />
          </Box>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, FatherName: e.target.value })} label="Father Name" type="text" />
          </Box>
        </Box>


        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, Contact: e.target.value })} label="Contact" type="text" />
          </Box>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, CNIC: e.target.value })} label="CNIC" type="text" />
          </Box>
        </Box>


        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, Class: e.target.value })} label="class" type="text" />
          </Box>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, Section: e.target.value })} label="Section" type="text" />
          </Box>
        </Box>


        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, DOB: e.target.value })} label="DOB" type="date" />
          </Box>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} label="Email" type="email" />
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} label="Password" type="password" />
          </Box>

          <Box sx={{ padding: "10px" }}>
            <SmInput onChange={(e) => setUserObj({ ...userObj, Address: e.target.value })} label="Address" type="text" />
          </Box>
        </Box>

        

        <Box >
          <Box sx={{ padding: "10px" }} >
          <Button variant='contained' anchorOrigin='center' onClick={Save}>Submitted</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
      
        message="Data Submitted Successfully"
        action={action}
      />
            {/* <SmButtton onClick={Save} label="Submit" /> */}
          </Box>

          <Box sx={{ padding: "10px" }}>
            <Link to="/view" style={{ textDecoration: "none" }}  >
              <SmButtton label="View Data" />
            </Link>

          </Box>

          <Box sx={{ padding: "10px" }}>
            <Link to="/idCard" style={{ textDecoration: "none" }}  >
              <SmButtton label="Generate ID Card" />
            </Link>

          </Box>
          
        </Box>




      </Box>
  </div>
</div>



    </>
  )
}

export default Add;
