import React from "react";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import contactImage from "../assets/introImage.jpg";
import nikil from "../assets/nikil.jpg";
import Typewriter from "typewriter-effect";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import pdfFile from "../assets/pdfFIle/NikilShresthaCV.pdf";

const openPdfInNewTab = () => {
  window.open(pdfFile, "_blank");
};

const About = () => {
  return (
    <Box
      id="intro"
      sx={{
        display: "flex",
        flexDirection: {xs:"column",md:"row"},
        padding: {xs:"none",md:"none",lg:5},
        paddingTop:{lg:"none",md:20,xs:15},
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        gap: 0.3,
        height:{lg:"none",xs:"100vh"},
        
      }}
    >
      <Box
        sx={{
          width:{lg:"40vw",xs:"80vw"},
          height: {lg:"75vh",xs:"63vh"},

          boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 25px",
          backgroundColor: "whitesmoke",
          borderRadius: 3,
          padding: 3,
        }}
      >
        <img
          src={nikil}
          width="300px"
          height="300px"
          style={{
            border: "2px solid #78cc6d",
            borderRadius: "4px",
            padding: {lg:5,xs:2,md:1}
          }}
        />
        <Typography
          sx={{
            fontFamily: "poppins",
            fontWeight: 600,
            fontSize: "30px",
            color: "brown",
          }}
        >
          Nikil Shrestha
        </Typography>
        <div className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("< I am MERN Stack Developer")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Welcome To You..../>")
                .start();
            }}
          />
        </div>
        <Divider variant="middle" sx={{ padding: 1 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            padding: 2,
          }}
        >
          <FaFacebookSquare size={24} />
          <FaInstagramSquare size={24} />
          <FaLinkedin size={24} />
          <FaGithub size={24} />
        </Box>
      </Box>

      {/* =====================================================================
       */}
      <Box
        sx={{
            width:{lg:"none",xs:"95vw"},
          display: "flex",
          flexDirection: "column",
          flexWrap:{lg:"none",xs:"wrap"},
          height: "70vh",
          // marginTop: 1,
          padding: 1,
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          backgroundColor: "whitesmoke",
          borderRadius: 2,
        }}
      >
        <Stack
          sx={{ display: "flex", flexDirection: "row", padding: {lg:2,xs:1}, gap: {lg:10,xs:5} }}
        >
          <Typography sx={{ fontWeight: 600, fontSize:{lg:20,xs:15}, textAlign: "left" }}>
            {"< ABOUT ME />"}
          </Typography>
          <Chip
            label="MERN Stack developer"
            color="success"
            variant="outlined"
          />
        </Stack>
        <Divider variant="middle" />


        <Box sx={{ display: "flex", flexDirection:{lg:"row",xs:"column"}, padding: {lg:2,xs:1} }}>
          <Typography
            sx={{
              flex:0.9,
              textAlign: "left",
            }}
          >
            I am Nikil Shrestha. I am a motivated and versatile individual,
            always eager to take on new challenges. With a passion for learning
            I am dedicated to delivering high-quality results. With a positive
            attitude and a growth mindset, I am ready to make a meaningful
            contribution and achieve great things.
          </Typography>

          <Divider orientation="vertical" flexItem sx={{ padding: 1 }} />
          <div className="info-list">
            <ul>
              <li
                className="listStyle"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <strong>Age.....</strong>
                <Chip label="21" color="success" variant="outlined" />
              </li>
              <Divider variant="middle" />

              <li
                className="listStyle"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <strong>Residence.....</strong>
                <Chip label="Nepal" color="success" variant="outlined" />
              </li>
              <Divider variant="middle" />

              <li
                className="listStyle"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <strong>Address....</strong>
                <Chip
                  label="Madhyapur Thimi, Bhaktapur"
                  color="success"
                  variant="outlined"
                />
              </li>
            </ul>
          </div>
        </Box>
        <Box
          sx={{
            color: "rgb(0 74 77)",
            padding: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            variant="contained"
            sx={{ width:{lg:"15vw",xs:"40vw"}}}
            onClick={openPdfInNewTab}
          >
            Check Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
