import React from 'react'
import { Box, Button, Card,Chip, Divider, Stack, Typography } from '@mui/material'
import eLearn from "../assets/projectImage/eLearn.png"
import todoImage from "../assets/projectImage/todoImage.png"
import ecommerceImage from "../assets/projectImage/ecommerce.png"

const Project = () => {
  return (
    <Box id="project" sx={{ padding:{md:9,xs:2,lg:9},backgroundColor:"whitesmoke" }}>
    <h2>My Project</h2>
    <Box sx={{ display: "flex",flexDirection:{md:"row",xs:"column"}, gap: {lg:1,xs:1}}}>

      <Card sx={{ width:{lg:350,xs:"100%"},boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <div >
          <div>
            <img src={eLearn} width='340' height='165' />
          </div>
          <Stack className='projectStack' direction="row" spacing={1}>
            <Chip label="HTML" size='small' variant="outlined" color='success' />
            <Chip label="CSS" size='small' variant="outlined" color='success' />
            <Chip label="Javascript" size='small' variant="outlined" color='success' />
          </Stack>

          <div className="categorie-item">


            <div className="ci-text">

              <Typography variant="h5">
                eLearn
              </Typography>
              <Divider variant="middle" className='divider' />
              <Typography variant="body2" color="text.secondary">
                eLearn is online learning platform designed to learn something online.
              </Typography>

            </div>
            <Button color='success' variant='contained'>Show Code</Button>


          </div>
        </div>

      </Card>
      <Divider orientation="vertical" flexItem />

      <Card sx={{ width:{lg:350,xs:"100%"},boxShadow:"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}>
        <div >
          <div>
            <img src={todoImage} width='340' height='165' />
          </div>
          <Stack className='projectStack' direction="row" spacing={1}>
            <Chip label="HTML" size='small' variant="outlined" color='success' />
            <Chip label="CSS" size='small' variant="outlined" color='success' />
            <Chip label="Javascript" size='small' variant="outlined" color='success' />
            <Chip label="React JS" size='small' variant="outlined" color='success' />
            <Chip label="Node JS" size='small' variant="outlined" color='success' />
            <Chip label="Mongo DB" size='small' variant="outlined" color='success' />
            <Chip label="Express JS" size='small' variant="outlined" color='success' />

          </Stack>

          <div className="categorie-item">


            <div className="ci-text">

              <Typography variant="h5">
                TODO App
              </Typography>
              <Divider variant="middle" className='divider' />
              <Typography variant="body2" color="text.secondary">
                A Todo Web App made with React JS, Redux, and Material UI. 
                It has a login page where users can log in with their Google account. 
                It has a sidebar where users can see all the tasks and can create a new task. 
                It has a calendar where users can add the time and date of their task. 
                It has a search bar where users can search for a particular task.
              </Typography>

            </div>
            <Button color='success' variant='contained'>Show Code</Button>


          </div>
        </div>

      </Card>
      <Divider orientation="vertical" flexItem />

      <Card sx={{ width:{lg:350,xs:"100%"},boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}>
        <div >
          <div>
            <img src={ecommerceImage} width='340' height='165' />
          </div>
          <Stack className='projectStack' direction="row" spacing={1}>
            <Chip label="HTML" size='small' variant="outlined" color='success' />
            <Chip label="CSS" size='small' variant="outlined" color='success' />
            <Chip label="Javascript" size='small' variant="outlined" color='success' />
            <Chip label="React JS" size='small' variant="outlined" color='success' />
            <Chip label="Node JS" size='small' variant="outlined" color='success' />
            <Chip label="Mongo DB" size='small' variant="outlined" color='success' />
            <Chip label="Express JS" size='small' variant="outlined" color='success' />

          </Stack>

          <div className="categorie-item">


            <div className="ci-text">

              <Typography variant="h5">
                NepMart
              </Typography>
              <Divider variant="middle" className='divider' />
              <Typography variant="body2" color="text.secondary">
                NepMart is a e-commerce platform made. It include frontend using React js and MUI library and backend using node js and mongo DB for database.
                .It has login page and register page where users can be either buyer or seller. It also include cart in which users can add the item.
              </Typography>

            </div>
            <Button color='success' variant='contained'>Show Code</Button>


          </div>
        </div>

      </Card>
    </Box>

  </Box>
  )
}

export default Project