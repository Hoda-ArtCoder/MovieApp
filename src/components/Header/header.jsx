import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function NavBar() {
  return (
    <AppBar position="static" className="nav">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Movie App
      </Typography>
      <NavLink
            to="/" className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
            }}> Home</NavLink>
    </Toolbar>
  </AppBar>
  );
}

