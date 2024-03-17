import React from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import mern from "../assets/mern.jpeg"
import pdfFile from "../assets/pdfFIle/Broadway_Certificate.pdf"

const openPdfInNewTab = () => {
    window.open(pdfFile, '_blank');
  };
const Experience = () => {
  return (
    <Box id="experience" sx={{ padding: 9, backgroundColor: "#60968B" }}>
    <h1>Experience</h1>
    <Card sx={{
      marginLeft: 8,
      maxWidth: "90%",
      height: 250,
      display: "flex",
      alignContent: "center",
      boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MERN stack development
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I have 3 months training experience in MERN stack development.
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={1} sx={{justifyContent:"center",alignItems:"center",padding:2}}>
          <Chip label="Mongo DB" variant="outlined" color='primary' />
          <Chip label="Express JS" variant="outlined" color='primary'/>
          <Chip label="React JS" variant="outlined" color='primary'/>
          <Chip label="Node JS" variant="outlined" color='primary'/>
          <Chip label="Mui library" variant="outlined" color='primary'/>
          <Chip label="Redux" variant="outlined" color='primary'/>
        </Stack>
        <Button onClick={openPdfInNewTab} variant='contained' color='success' >Certificate</Button>
      </CardActionArea>
      <CardMedia
        component="img"
        image={mern}
        sx={{ padding: "10px 10px 10px 0", width: "30%" }} />
    </Card>
  </Box>
  )
}

export default Experience