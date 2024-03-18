import React from 'react'
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { $axios } from '../lib/axios';
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, Rating, Typography } from '@mui/material';


const Testimonial = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: '30px',
        slidesToShow: 3,
        speed: 500,
      };
      const [page, setPage] = useState(1);
    
      // Set page to 1 if search text is typed
      useEffect(() => {
        setPage(1);
      }, []);
    
      const { data } = useQuery({
        queryKey: ['latest-review', page],
        queryFn: async () => {
          return await $axios.post('/ratings/all', {
            page,
            limit: 10,
          });
        },
    
      });
    
      const ratings = data?.data?.ratings;
    
      return (
        <Box sx={{ padding: 9,backgroundColor:"whitesmoke"}}>
          <h1>{'< Review />'}</h1>
          <div className="slider-container">
            <Slider {...settings}>
              {ratings?.map((item) => (
                <Card key={item?.id} sx={{
                  margin: '0 10px',
                  minHeight: "50vh",
                  transform: "scale(0.95)",
                  boxShadow: "rgba(0, 0, 0, 0.35)",
    
                }}>
    
                  <CardActionArea>
                    <CardActions
                      style={{
                        marginTop: 20,
                        display: 'flex',
                        alignItems: 'left',
                        justifyContent: 'left',
                        color: 'black'
                      }}
                    >
                      {typeof item?.totalRating === 'number' ? (
                        <Rating size="medium" value={item?.totalRating} readOnly precision={0.5} sx={{
                          '& .MuiRating-iconFilled': {
                            color: '#119797',
                          },
                        }} />
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          No rating
                        </Typography>
                      )}
                    </CardActions>
    
                    <ImQuotesLeft color='#195a34' size={25} style={{ display: "flex", margin: 5 }} />
    
                    <Typography color="text.secondary" sx={{ height: "18vh", margin: 3, textAlign: "center", }}>
                      {item?.suggestion}
                    </Typography>
    
                    <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "right", padding: 2 }}>
                      <ImQuotesRight color='#195a34' size={25} style={{}} />
    
                    </Box>
    
    
    
                    <Box sx={{ display: "flex", flexDirection: "row", padding: 2, color: "white",backgroundColor:"#60968B" }}>
                      <Avatar sx={{ width: 55, height: 55, marginTop: 2, backgroundColor: "whitesmoke", color: "black" }}>
                        {item?.shortName}
                      </Avatar>
                      <CardContent >
                        <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                          {item?.fullName}
                        </Typography>
                        <Typography sx={{ alignItems: "left", justifyContent: "left" }}>{item?.profession}</Typography>
    
                      </CardContent>
                    </Box>
    
    
                  </CardActionArea>
                </Card>
              ))}
            </Slider>
          </div>
        </Box>
      )
};

export default Testimonial