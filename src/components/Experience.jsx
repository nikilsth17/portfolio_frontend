import React from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';
import mern from "../assets/mern.jpeg";
import pdfFile from "../assets/pdfFIle/Broadway_Certificate.pdf";

const openPdfInNewTab = () => {
  window.open(pdfFile, '_blank');
};

const Experience = () => {
  return (
    <Box id="experience" sx={{ padding: {xs:1,lg:9, md: 9 }, background: "red" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Experience
      </Typography>
      <Card sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: { xs: "100%", md: "90%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
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
            <Stack direction="row" spacing={1} sx={{display:"flex",flexWrap:"wrap", justifyContent: "center", alignItems: "center", padding: 2 }}>
              <Chip label="Mongo DB" variant="outlined" color='primary' />
              <Chip label="Express JS" variant="outlined" color='primary' />
              <Chip label="React JS" variant="outlined" color='primary' />
              <Chip label="Node JS" variant="outlined" color='primary' />
              <Chip label="Mui library" variant="outlined" color='primary' />
              <Chip label="Redux" variant="outlined" color='primary' />
            </Stack>
            <Button onClick={openPdfInNewTab} variant='contained' color='success' sx={{ marginLeft: "auto", marginTop: 2 }}>Certificate</Button>
          </CardContent>
        </CardActionArea>
        <CardMedia
          component="img"
          image={mern}
          sx={{ width: { xs: "100%", md: "30%" }, maxHeight: "300px", objectFit: "cover", flexShrink: 0 }}
        />
      </Card>
    </Box>
  );
};

export default Experience;
