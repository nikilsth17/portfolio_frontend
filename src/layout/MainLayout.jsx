import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomSnackbar from '../components/CustomSnackbar'
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