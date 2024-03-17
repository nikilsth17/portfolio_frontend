import React from 'react'
import {Box} from "@mui/material"
import {Outlet} from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
    <Header/>
     <Box sx={{minHeight:"90vh",backgroundColor:"white"}}>
      <Outlet/>

      </Box>
      <Footer/>
    </>
  )
}

export default MainLayout