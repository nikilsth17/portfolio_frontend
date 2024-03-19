import React from 'react';
import { Box, Card, CardActionArea, CardContent, Chip, Typography, useMediaQuery, ThemeProvider } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useQuery } from "react-query";
import { $axios } from '../lib/axios';
import { createTheme } from '@mui/material/styles';

const Education = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["education-list"],
    queryFn: async () => {
      return await $axios.post("/education/all", {
        page: 1,
        limit: 10,
      });
    },
  });

  const educations = data?.data?.educations;

  // Define a custom theme with breakpoints
  const theme = createTheme();

  // Check if the screen size is large
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen= useMediaQuery(theme.breakpoints.up('xs'));
  return (
    <ThemeProvider theme={theme}>
      <Box id="education" sx={{ padding: { xs: 3, lg: 9 }, backgroundColor: "whitesmoke" }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ color: "#000" }}>
          {'<Education/>'}
        </Typography>
        <Timeline position={isLargeScreen ? "alternate" : "right"} sx={{marginLeft:{xs:-7}}}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            educations?.map((item, index) => (
              <TimelineItem key={index}>
                {isLargeScreen && ( // Render Chip only for large screens
                  <Chip label={item?.date} sx={{ marginTop: 1 }} />
                )}
                <TimelineSeparator>
                  <TimelineDot color="success" sx={{ marginTop: 2, padding:{lg:1.5,xs:"none"} }} />
                  <TimelineConnector sx={{ background: " rgb(0 74 77)" }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Card className='educationCard' sx={{ width: { xs: "85vw", md: "39vw" }, boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}>
                    <CardActionArea>
                      <CardContent sx={{ textAlign: 'left' }}>
                        {isSmallScreen && (
                      <Chip label={item?.date}/>
                        )
                        }

                        <Typography gutterBottom component="div" sx={{fontSize:{lg:"20px",xs:"10px"}}}>
                          {item?.collegeName}
                        </Typography>
                        <Typography variant='h5'>{item?.degree}</Typography>
                        <Typography variant='h6'>Grade: {item?.grade}</Typography>
                        <Typography>{item?.location}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item?.introduction}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))
          )}
        </Timeline>
      </Box>
    </ThemeProvider>
  );
}

export default Education;
