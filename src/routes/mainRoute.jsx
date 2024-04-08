import React from 'react'
import Home from '../pages/Home'
import Skill from '../components/Skill'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Project from '../components/Project'
import ReviewSite from '../components/ReviewSite'
import Contact from '../components/Contact'
import MainLayout from '../layout/MainLayout'

export const mainRoute=[
    {
        path:"/",
        element:<MainLayout/>,
        children:[
          {
            path:"home",
            element:<Home/>
          },
          {
            path:"skills",
            element:<Skill/>
          },
          {
            path:"about",
            element: <About/>
          },
          {
            path:"experience",
            element:<Experience/>
          },
          {
            path:"education",
            element:<Education/>
          },
          {
            path:"project",
            element: <Project/>
          },
          {
            path:"reviewSite",
            element: <ReviewSite/>
          },
          {
            path:"contact",
            element:<Contact/>
          }


     
        ]
    }
]