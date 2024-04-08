import React from 'react'
import CustomSnackbar from '../components/CustomSnackbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'

const MainLayout = () => {
  return (
    <>
    <CustomSnackbar/>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default MainLayout