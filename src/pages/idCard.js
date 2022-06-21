import React from 'react'
import { getData } from '../configuration/firebase/firebaseMethods';
import { useState,useEffect } from 'react';
import { Typography } from '@mui/material';
import "./idCard.css";
import { Box } from '@mui/system';
import SmButtton from '../components/smButtton';
import { contains } from '@firebase/util';

function IdCard() {


    const [data , setData] = useState([]);


  const GetData = ()=>{
    getData('StudentData').then((res)=>{
      setData(res);
      console.log(res)
   
      
    });
  }
  useEffect((e)=>{
    GetData()
  },[])

  function PrintOut(){
    window.print();
  }

  return (
    <div className='Cardmain'>
      <div className='Cardcenter'>
        <Box style={{marginTop:"50px", backgroundColor:"cyan",border:"4px solid white"}}>
        <Typography variant='h4'>STUDENT ID CARD</Typography>
        </Box>
        <Box>
            <img width='100px' style={{border:"2px solid black", borderRadius:"100px",marginTop:"10px"}} src='https://www.kindpng.com/picc/m/690-6904538_men-profile-icon-png-image-free-download-searchpng.png' />
        </Box>
        {data.map((e)=>(
            <Box >
            <div className='detail'>
            <Box sx={{padding:'0px'}}>
                <Typography variant='h5' sx={{fontWeight:"bold"}}>Name:{e.name}</Typography>
            <hr></hr>
            </Box>
            <Box sx={{padding:'0px'}}>
                <Typography variant='h6' sx={{fontWeight:"bold"}}>ID:{e.id}</Typography>
                <hr></hr>
            </Box>
            <Box sx={{padding:'0px'}}>
                <Typography variant='h6'>FatherName :{e.FatherName}</Typography>
                <hr></hr>
            </Box>
            <Box sx={{padding:'0px'}}>
                <Typography variant='h6'>Class :{e.Class}</Typography>
                <hr></hr>
            </Box>
            <Box sx={{padding:'0px'}}>
                <Typography variant='h6'>Section: {e.Section}</Typography>
                <hr></hr>
            </Box>
            <Box sx={{padding:'0px'}}>
                <Typography variant='h6'>Contact: {e.Contact}</Typography>
                <hr></hr>   
            </Box>
            </div>

        </Box>
        ))}

        
        
      </div>
      <Box sx={{marginTop:'10px'}}>
          <Box>
            <SmButtton onClick={PrintOut} label="Printout" />
          </Box>
        </Box>
    </div>
  )
}

export default IdCard
