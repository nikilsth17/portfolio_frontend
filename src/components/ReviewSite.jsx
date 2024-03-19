import React from "react";
import { Box, Typography, Rating, Grid, TextField, Button, Divider } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {openErrorSnackbar, openSuccessSnackbar } from '../store/slice/snackbarSlice';
import Typewriter from 'typewriter-effect';
import { BASEURL } from "../lib/axios";

const ReviewSite = () => {
  const dispatch = useDispatch();
  const [ratings, setRatings] = useState({
    fullName: "",
    profession: "",
    design: 0,
    functionality: 0,
    responsiveness: 0,
    performance: 0,
    contentQuality: 0,
    suggestion: "",
  });

  // const [suggestion, setSuggestion] = useState('');
  const [totalRating, setTotalRating] = useState(null);
  const handleSubmit = async () => {
    try {
      // Send a POST request to your Node.js server
      const response = await fetch(`${BASEURL}/rating/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ratings),
      });

      if (response.ok) {
        const responseData = await response.json();
        //  console.log(responseData)
        const fullName = responseData?.fullName;
        // console.log(fullName)
        // Store the fullName in localStorage
        localStorage.setItem("fullName", fullName);
        // Rating submitted successfully, update total rating state
        setTotalRating(responseData.totalRating);
        console.log("Rating submitted successfully");

        dispatch(openSuccessSnackbar(responseData?.message));

        // Clear the text fields by resetting the ratings state
        setRatings({
          fullName: "",
          profession: "",
          design: 0,
          functionality: 0,
          responsiveness: 0,
          performance: 0,
          contentQuality: 0,
          suggestion: "",
        });
      } else {
        // Handle error
        console.error("Error submitting rating");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      dispatch(openErrorSnackbar(error?.responseData?.message))
    }
  };

  return (
    <Box sx={{ padding: 9, backgroundColor: "whitesmoke", color: "black" }}>
      <Typography variant="h5">Review Portfolio Website</Typography>
      <div className="typewriter" style={{ padding: 10 }}>
        <Typewriter
          options={{
            strings: [
              "< How I can improve this website? Give a suggestion. />",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <Box
        sx={{
          background: "whitesmoke",
          marginTop: 4,
          marginLeft: {xs:-10,lg:18},
          display: "flex",
          flexDirection: {xs:"column",lg:"row"},
          alignItems: "center",
          justifyContent: "center",
          width: {lg:"63vw",xs:"100vw"},
          boxShadow: {lg:"  rgb(48, 59, 48) 10px 0px 20px",xs:"none"}
        }}
      >
        <Box sx={{ padding:{lg:3,xs:1} }}>
          <Grid className="gridStyle">
            <Typography variant="h6">UI/UX design:</Typography>
            <Rating
              name="design"
              value={ratings.design}
              onChange={(event, newValue) =>
                setRatings({ ...ratings, design: newValue })
              }
              size="large"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#119797",
                },
              }}
            />
          </Grid>

          <Grid className="gridStyle">
            <Typography variant="h6">Functionality:</Typography>
            <Rating
              className="ratingStyle"
              name="functionality"
              value={ratings.functionality}
              onChange={(event, newValue) =>
                setRatings({ ...ratings, functionality: newValue })
              }
              size="large"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#119797",
                },
              }}
            />
          </Grid>

          <Grid className="gridStyle">
            <Typography variant="h6">Responsiveness:</Typography>
            <Rating
              className="ratingStyle"
              name="responsiveness"
              value={ratings.responsiveness}
              onChange={(event, newValue) =>
                setRatings({ ...ratings, responsiveness: newValue })
              }
              size="large"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#119797",
                },
              }}
            />
          </Grid>

          <Grid className="gridStyle">
            <Typography variant="h6">Performance:</Typography>
            <Rating
              className="ratingStyle"
              name="performance"
              value={ratings.performance}
              onChange={(event, newValue) =>
                setRatings({ ...ratings, performance: newValue })
              }
              size="large"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#119797",
                },
              }}
            />
          </Grid>

          <Grid className="gridStyle">
            <Typography variant="h6">Content Quality:</Typography>
            <Rating
              className="ratingStyle"
              name="contentQuality"
              value={ratings.contentQuality}
              onChange={(event, newValue) =>
                setRatings({ ...ratings, contentQuality: newValue })
              }
              size="large"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#119797",
                },
              }}
            />
          </Grid>

          <Typography variant="h6" className="gridStyle">
            Total Rating:{totalRating !== null && `${totalRating}`}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleSubmit}
            sx={{ marginTop: 1 }}
          >
            Submit Review
          </Button>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box sx={{ padding: 2,width:{xs:"100vw",lg:"none"} }}>
          <form
            style={{
              padding: 9,
              gap: 6,
              height: "40vh",
              width:{lg:"30vw",xs:"100vw"},
              display: "flex",
              flexDirection: "column",
              backgroundColor: "whitesmoke",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
              borderRadius: 10,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
              <TextField
                label="Full Name"
                name="fullName"
                onChange={(event) =>
                  setRatings({ ...ratings, fullName: event.target.value })
                }
                value={ratings.fullName}
              />

              <TextField
                label="Profession"
                name="profession"
                value={ratings.profession}
                onChange={(event) =>
                  setRatings({ ...ratings, profession: event.target.value })
                }
              />
            </Box>

            <TextField
              name="suggestion"
              value={ratings.suggestion}
              onChange={(event) =>
                setRatings({ ...ratings, suggestion: event.target.value })
              }
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              label="Suggestion Box"
            />
          </form>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ padding: 1 }} />
    </Box>
  );
};

export default ReviewSite;
