import React from 'react'
import { AppBar, Box, Button, Typography } from '@mui/material'

const Header = () => {
  return (
    <AppBar id="header" sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        height: "70px",
        backgroundColor:"whitesmoke",
        color: "black",
        zIndex: 997,
        transition: "all 0.5s ease",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
      >
        <Typography sx={{ marginTop: 2,fontSize:"25px",fontStyle:"bold" }}>LAWO</Typography>
        <Box sx={{ gap: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href='#intro'>
            <Typography>About</Typography>
          </a>
          <a href='#skills'>
            <Typography>Skills</Typography>
          </a>
          <a href="#experience" rel="noopener noreferrer">
            <Typography>Experience</Typography>
          </a>
          <a href='#project'>
          <Typography>Projects</Typography>
  
          </a>
          <a href='#education'>
            <Typography>Education</Typography>
          </a>
          <a href='#contact'>
            <Typography>Contact</Typography>
          </a>
        </Box>
  
        <a href='https://github.com/nikilsth17' target='_blank'>
          <Button variant="contained" color='success' sx={{ marginTop: 2 }}>Github Profile</Button>
        </a>
  
      </AppBar>
  )
}

export default Header