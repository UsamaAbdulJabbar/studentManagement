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
import { useDispatch, useSelector } from 'react-redux';

function Add() {

  const [userObj, setUserObj] = useState({});

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
      alert("Form Submitted Succesfully")
      console.log("Data Saved Succcessfully")

    });
    // }).catch((err) => {
    //   console.log(err)
    // });





  };

  const getDataFromReducer = useSelector((a) => a)
  console.log(getDataFromReducer);

  const dispatch = useDispatch();

  const update = () => {
    var name = prompt("Enter new name");
    dispatch(
      {
        type: "updateData",
        userName: name,

      }

    )
  }



  return (
    <>
      <Typography variant='h3'>{getDataFromReducer.userName}</Typography>



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
            <SmInput onChange={(e) => setUserObj({ ...userObj, id: e.target.value })} label="ID" type="text" />
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
          <Box sx={{ padding: "10px" }} >

            <SmButtton onClick={update} label="Update" />
          </Box>

          <Box sx={{ padding: "10px" }}>
            <Link to="/view" style={{ textDecoration: "none" }}  >
              <SmButtton label="View Data" />
            </Link>

          </Box>
        </Box>



      </Box>



    </>
  )
}

export default Add;
