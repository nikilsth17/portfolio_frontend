import React from 'react'
import {Box} from "@mui/material"
import {Outlet} from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomSnackbar from '../components/CustomSnackbar'

const MainLayout = () => {
  return (
    <>
    <CustomSnackbar/>
    <Header/>
     <Box sx={{minHeight:"90vh",backgroundColor:"white"}}>
      <Outlet/>

      </Box>
      <Footer/>
    </>
  )
}

export default MainLayout