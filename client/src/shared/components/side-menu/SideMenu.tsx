import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {MuiDrawer} from '../drawer/Index'

export const SideMenu = () => {
  const listStyle3 = {
    background: '#002137',
  }
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar style={listStyle3}>
            <MuiDrawer/>
          <Typography variant="h3" textAlign={'left'} component="div" sx={{ flexGrow: 1, textDecoration:'none',color: 'inherit'}}>
            Medcloud
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};