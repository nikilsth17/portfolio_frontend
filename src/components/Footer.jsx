import React from 'react'
import { Box, Typography } from '@mui/material'
import { FaFacebookSquare, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (

  <div className="footer-container">
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <Box sx={{color:"black",padding:5}}>
    <Typography>FOLLOW ME!</Typography>
    <Box sx={{padding:2,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:4}} >
    <FaFacebookSquare size={24}/>
    <FaInstagramSquare size={24}/>
    <FaLinkedin size={24}/>
    <FaGithub size={24}/>
    </Box>
    <Typography variant="h6" sx={{gap:"2rem" }}>
      Copyright &copy; 2024 All rights reserved| This is portfolio is made by Nikil Shrestha
    </Typography>
    </Box>
</div>
  )
}

export default Footer