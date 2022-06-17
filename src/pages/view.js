import React, { useEffect, useState } from 'react'
import { Table, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { getData } from '../configuration/firebase/firebaseMethods';
import SmButtton from '../components/smButtton';
import './view.css';


function View() {

  const [data , setData] = useState([]);


  const GetData = ()=>{
    getData('StudentData').then((res)=>{
      setData(res);
   
      
    });
  }
  useEffect((e)=>{
    GetData()
  },[])

  


  
 






  return (
    <>
    <Typography variant='h1'>Student Data</Typography>
    {/* <Box sx={{margin:"50px"}}><SmButtton onClick={GetData}  label="Get data" /></Box> */}
    <table>
      <thead>
        <tr  >
          
          {/* <th style={{padding:"20px",fontSize:"1.5rem"}}  >Name</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>Father Name</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>CNIC</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>Contact</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>Class</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>Section</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>ID</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>Email</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>Password</th>
          <th style={{padding:"20px",fontSize:"1.5rem"}}>Add/Delete</th> */}

          
        </tr>
      </thead>
      {data.map((e)=>{
        
        return(
          <>
          <tobody>
            <tr style={{padding:"20px"}}>
              <td style={{fontSize:"1.5rem"}}>{e.name}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.FatherName}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.CNIC}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.Contact}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.Class}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.Section}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.id}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.email}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}>{e.password}</td>
              <td style={{padding:"20px",fontSize:"1.5rem"}}><SmButtton label= "Edit  " /> <SmButtton label= "Delete" /> </td>
            </tr>
          </tobody>
          </>
        )
      })}
      
      </table> 

   


    </>
  )
}

export default View;
