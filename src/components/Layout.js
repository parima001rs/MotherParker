import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Drawer, List, CssBaseline, Container, Box, IconButton, Menu, MenuItem, useMediaQuery, TextField
} from '@mui/material';
import { Menu as MenuIcon, ChevronLeft, MoreVert } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import DrawerSection from './DrawerSection';  // Import the reusable component
import { Outlet } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSecondaryContext } from '../context/SecondaryContext';
import { useGenericContext } from '../context/GenericContext';
import { useGenericPaginationContext } from '../context/GenericPaginationContext';
// import MPTablesInterfaceMapping from './settings/MPTablesInterfaceMapping/MPTablesInterfaceMapping';

const drawerWidth = 300;

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { accounts } = useMsal();
  const username = accounts[0] && accounts[0].username;
  //const email = accounts[0] && accounts[0].idTokenClaims && accounts[0].idTokenClaims.email;
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  const { loadingSecondary } = useSecondaryContext();
  const { loadingGeneric } = useGenericContext();
  const { loadingGenericPagination } = useGenericPaginationContext();
  

  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        var userRequestData = {
          email: username
        }
        const response = await axios.post(process.env.REACT_APP_API_URL + '/api/DynamicMenu', userRequestData);
        const data = response.data;
        setSections(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSections();
  }, []);

  const { instance } = useMsal();
  //const navigate = useNavigate();

  const handleLogout = () => {
    instance.logoutRedirect(); // This will redirect the user to Azure AD's logout page
  };

  // Function to go back to the previous page
  // const handleBackClick = () => {
  //   navigate(-1); // This will navigate one step back in the history stack
  // };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };




  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            {open ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Middleware Integration App - {process.env.REACT_APP_ENV}
          </Typography>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
            <MenuItem>{username && <p>Welcome {username}</p>}</MenuItem>

            <MenuItem onClick={() => navigate('/MPTablesInterfaceMapping')}>Manage Table</MenuItem>
            <MenuItem onClick={() => navigate('/UserLogin')}>Manage User</MenuItem>
            <MenuItem onClick={() => navigate('/UserInterfaceMapping')}>Manage Roles</MenuItem>


            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            fontSize: '13px',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', padding: 1 }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            size="small"
            onChange={handleSearchChange}
            sx={{
              marginBottom: 2,
              '& .MuiOutlinedInput-root': {
                fontSize: '12px',
                height: '30px',
              },
              '& .MuiInputLabel-root': {
                fontSize: '12px',
              }
            }}
          />
          <List>
            {sections.map((section, index) => (
              <DrawerSection
                key={index}
                sectionName={section.name}
                items={section.items}
                searchTerm={searchTerm}
              />
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar />
        <Container>
          {(loadingSecondary || loadingGeneric || loadingGenericPagination) && <div className="loader">
            <p> Loading data... </p>
          </div>}
        </Container>
        {(!loadingSecondary && !loadingGeneric && !loadingGenericPagination) &&
          <Outlet />
        }
      </Box>
    </Box>
  );
};

export default Layout;
