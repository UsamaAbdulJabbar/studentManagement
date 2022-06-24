import  React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink, useNavigate } from 'react-router-dom';
import Slider from './slider';
import Cards from './cards';
import { useSelector,useDispatch } from 'react-redux';
import SmButtton from './smButtton';
import axios from "axios";
import { useState } from 'react';
 


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DashboardLayout() {
    
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const add =()=>{
    navigate(`/add`)
  }
  const studentData =()=>{
    navigate(`/view`)
  }
  const idCard =()=>{
    navigate(`/idCard`)
  }

   //API GET DATA
  const [apiData, setApiData] = useState([]);

  let api = 'https://jsonplaceholder.typicode.com/users/1';

  const GetApiData = ()=>{
    axios.get(api).then((res)=>{
      console.log(res.data)
     setApiData(res.data)
    
     
  }).catch((err)=>{
      console.log(err);
  })

  
    }


  //getting data from REDUX REDUCER
  const getDataFromReducer = useSelector((a)=>a)
  console.log(getDataFromReducer);

  //Update data from REDUX REDUCER
  
  const dispatch = useDispatch();

  const UpdateData = ()=>{
   
    dispatch(
      {
        type :"dataUpdated",
        ID : apiData.id,
        name : apiData.name,
        username : apiData.username,
        email : apiData.email,
        contact : apiData.contact,
        website : apiData.website,

        
      }
    )
  }
 
  
 
console.log(apiData)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            STUDENT MANAGEMENT SYSTEM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
      
        <Divider />
        <List>
          
            <ListItem  disablePadding sx={{ display: 'block',backgroundColor:"#1976d2",border:"1px solid white" }}>
              <NavLink to="/add" style={{textDecoration:"none"}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 
                </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Student Form"  />
              </ListItemButton>
              </NavLink>
            </ListItem>

            {/* student Data */}
            <ListItem  disablePadding sx={{ display: 'block',backgroundColor:"#1976d2",border:"1px solid white" }}>
              <NavLink to="/view" style={{textDecoration:"none"}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 
                </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Student Data"  />
              </ListItemButton>
              </NavLink>
            </ListItem>


             {/* student ID */}
             <ListItem  disablePadding sx={{ display: 'block',backgroundColor:"#1976d2",border:"1px solid white" }}>
              <NavLink to="/view" style={{textDecoration:"none"}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 
                </ListItemIcon>
                <ListItemText sx={{color:"white"}} primary="Student ID Card"  />
              </ListItemButton>
              </NavLink>
            </ListItem>

          
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 10, display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
             <Box sx={{display:"flex"}}>

              <Box sx={{ padding:"20px"}}>
                <Cards onClick={add} head="STUDENT FORM" label="Stundent Form" image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </Box>
              
              <Box sx={{ padding:"20px"}}>
                <Cards onClick={studentData} head="STUDENT DATA" label="Student Data" image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" />
              </Box>

              <Box sx={{ padding:"20px"}}>
                <Cards onClick={idCard} head="STUDENT ID CARD" label="ID Card" image="https://images.unsplash.com/photo-1566554001689-b53a88dbd138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80" />
              </Box>
             </Box>
             <hr></hr>
             <Box>
          <Typography variant='h4'>ID : {getDataFromReducer.id}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Name : {getDataFromReducer.name}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>UserName : {getDataFromReducer.username}</Typography>
        </Box>
        
        <Box>
          <Typography variant='h4'>Email : {getDataFromReducer.email}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Contact: {getDataFromReducer.contact}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Website: {getDataFromReducer.website}</Typography>
        </Box>
                    {/* DATA ARE GETTING FROM API */}
        {/* <Box>
          <Typography variant='h4'>ID : {apiData.id}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Name : {apiData.name}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>UserName : {apiData.username}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Email : {apiData.email}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Phone : {apiData.phone}</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Website : {apiData.website}</Typography>
        </Box> */}

        <Box>
          <SmButtton label='Update' onClick={UpdateData} />
        </Box>
        <Box>
          <SmButtton label='Get Api Data' onClick={GetApiData} />
        </Box>
      </Box>
                 
    </Box>
  );
}
