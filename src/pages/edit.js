import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import SmButtton from '../components/smButtton';
import SmInput from '../components/smInput';
import { useState, useNavigate } from 'react';
import { getData, sendData, signUpUser } from '../configuration/firebase/firebaseMethods';
import {

  Link
} from "react-router-dom";
import "./add.css"


function Edit() {

  const [userObj, setUserObj] = useState({});

  const [data, setData] = useState([]);
  const GetData = () => {
    getData('StudentData').then((res) => {
      setData(res);



    });
  }

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
        alert("Data Submitted Successfully")

        console.log("Data Saved Succcessfully")

      }).catch((err) => {
      console.log(err)
    });





  };




  return (
    <>
<div className='main'>
  <div className='centerDiv'>
      <Typography variant='h3'>Edit Student Data</Typography>
    
  <Box sx={{ marginTop: "25px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "10px" }}>
            <SmInput  onChange={(e) => setUserObj({ ...userObj, name: e.target.value })} label="Student Name" type="text" />
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

            <SmButtton onClick={Save} label="Submit" />
          </Box>

          <Box sx={{ padding: "10px" }}>
            <Link to="/view" style={{ textDecoration: "none" }}  >
              <SmButtton label="View Data" />
            </Link>

          </Box>
        </Box>



      </Box>
  </div>
</div>



    </>
  )
}

export default Edit;
