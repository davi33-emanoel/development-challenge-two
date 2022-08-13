import * as React from 'react';
import { Drawer, Box, Typography, IconButton, Avatar, Divider, Button,} from '@mui/material';
import { useState } from 'react';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';

export const MuiDrawer= () => {
    const [isDrawerOpen, setIsDrawerOpen]= useState(false)
  return (
    <>
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={()=> setIsDrawerOpen(true)}
    >
    <MenuIcon />
    </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
          <Box p={2} width='200px' textAlign='center' role='presentation' bgcolor={'#002137'}>
          <Avatar sx={{height:120, width:120, display:'flex', left:30}} src="https://medcloud.link/logos/open-graph-logo-large-br.png" component="a" href="" ></Avatar>
          </Box>
          <Divider></Divider>
          <Button variant="text" sx={{marginTop:1}}><MedicalInformationIcon/> Cadastrar novo cliente</Button>
          <Divider></Divider>
          <Button variant="text" sx={{marginTop:1}}><EditIcon></EditIcon> Editar Cadastro</Button>
          <Divider></Divider>
      </Drawer>
    </>
  )
}