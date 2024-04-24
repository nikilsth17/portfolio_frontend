import React, { useEffect, useState } from 'react'
import CustomSnackbar from '../components/CustomSnackbar'

import Home from '../pages/Home'
import IntroLoading from '../components/IntroLoading'

const MainLayout = () => {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
    }, [])
    if (loading) {
        return <IntroLoading/>
    }
  return (
    <>
    <CustomSnackbar/>
    <Home/>
    
    </>
  )
}

export default MainLayout