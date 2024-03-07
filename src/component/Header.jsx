import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <AppBar position='sticky' color='secondary'>
      <Toolbar>
        <NavLink to="/" style={{ textDecoration: "none", color: "wheat", marginRight:"10px"}}>
          <Typography>Home</Typography>
        </NavLink>
        <NavLink to="/signup" style={{ textDecoration: "none", color: "wheat",marginRight:"10px" }}>
          <Typography>Signup</Typography>
        </NavLink>
        <NavLink to="/sign" style={{ textDecoration: "none", color: "wheat" ,marginRight:"10px"}}>
          <Typography>Sign In</Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  </>
  
  )
}

export default Header