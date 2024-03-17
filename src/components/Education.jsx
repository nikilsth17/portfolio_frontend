import React from 'react'
import { Box, Card, CardActionArea, CardContent, Chip, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {useQuery} from "react-query";
import { $axios } from '../lib/axios';

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
  return (
    <Box id="education" sx={{ padding: 9,backgroundColor:"whitesmoke"}} >
    <h1>{'<Education/>'}</h1>
    <Timeline position='alternate'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        educations?.map((item, index) => (
          <TimelineItem key={index}>
            <Chip label={item?.date} sx={{marginTop:1}}/>
           
            <TimelineSeparator sx={{}}>
              <TimelineDot  color="success" sx={{marginTop:2,padding:1.5}}/>
              <TimelineConnector sx={{background:" rgb(0 74 77)"}}/>
            </TimelineSeparator>
            <TimelineContent>
              <Card className='educationCard' sx={{maxHeight:"70vh", width: "39vw", boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}>
                <CardActionArea>
                  <CardContent sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h4" component="div">
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
  )
}

export default Education