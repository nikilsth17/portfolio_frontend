import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Skill from '../components/Skill'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Testimonial from '../components/Testimonial'
import ReviewSite from '../components/ReviewSite'
import Project from '../components/Project'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const Home = () => {
  
  return (
    <>
    <Header/>
    <About/>
    <Skill/>
    <Experience/>
    <Project/>
    <Education/>
    <ReviewSite/>
    <ContactUs/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home