import React, { useEffect, useState } from 'react'
import { Table, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { deleteData, getData } from '../configuration/firebase/firebaseMethods';
import SmButtton from '../components/smButtton';
import './view.css';
import { styled } from '@mui/material/styles';

import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import DeleteConfirmation from '../components/deleteConfirm';


function View() {


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  

  const [data , setData] = useState([]);


  const GetData = ()=>{
    getData('StudentData').then((res)=>{
      setData(res);
   
      
    });
  }
  useEffect((e)=>{
    GetData()
  },[])

  const DeleteData=(id)=>{
    deleteData("StudentData",id)
    console.log(id)
  }


  
 






  return (
    <>
    <Typography variant='h1'>Student Data</Typography>
    {/* <Box sx={{margin:"50px"}}><SmButtton onClick={GetData}  label="Get data" /></Box> */}
    {/* <table>
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

{/*           
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
      
      </table>  */} 

<TableContainer component={Paper}>
  <Box >
    <Box sx={{padding:"10px"}}>
      <NavLink to='/add' style={{textDecoration:"none"}}>
        <SmButtton  label="add Student"  sx={{textDecoration:"none"}} />
      </NavLink>
    </Box>
    <DeleteConfirmation label="Are your sure you want to delete this record " />
  </Box>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell><Typography>STUDENT NAME</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>FATHER NAME </Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>CNIC</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>CONTACT</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>CLASS</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>SECTION</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>EMAIL</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>PASSWORD</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>ADDRESS</Typography></StyledTableCell>
            <StyledTableCell align="justify"><Typography>EDIT/DELETE</Typography></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               <Typography variant='h6'> {e.name}</Typography>
              </StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.FatherName}</Typography></StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.CNIC}</Typography></StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.Contact}</Typography></StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.Class}</Typography></StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.Section}</Typography></StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.email}</Typography></StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.password}</Typography></StyledTableCell>
              <StyledTableCell align="justify"><Typography variant='h6'>{e.Address}</Typography></StyledTableCell>
              <StyledTableCell align="justify">
               <Box sx={{display:"flex"}}>
               <Box sx={{padding:"10px"}}>
              <SmButtton label='Edit ' color="success"  />
                </Box>
                <Box sx={{padding:"10px"}}>
             <SmButtton  label='Delete ' onClick={()=>DeleteData(e.id)} color="error"  />
                </Box>
               </Box>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   


    </>
  )
}

export default View;
