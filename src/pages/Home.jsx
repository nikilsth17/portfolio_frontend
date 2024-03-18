import React from 'react'
import About from '../components/About'
import Skill from '../components/Skill'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import ReviewSite from '../components/ReviewSite'
import Project from '../components/Project'

const Home = () => {
  return (
    <>
    <About/>
    <Skill/>
    <Experience/>
    <Project/>
    <Education/>
    <ReviewSite/>
    <Contact/>
    <Testimonial/>
    </>
  )
}

export default Home