import React from 'react'

import Header from '../components/Header'
import CustomSnackbar from '../components/CustomSnackbar'
import Home from '../pages/Home'
import Footer from '../components/Footer'

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