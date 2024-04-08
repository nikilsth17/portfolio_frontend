import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CircularProgress, Rating, Typography } from '@mui/material';
import { $axios } from '../lib/axios';

const Testimonial = () => {
    const [page] = useState(1);
    
    const { data, isLoading, isError } = useQuery(['latest-review', page], async () => {
        const response = await $axios.post('/ratings/all', {
            page,
            limit: 10,
        });
        return response.data;
    });

    const ratings = data?.ratings || [];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 5,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    return (
        <Box sx={{ padding: { xs: 2, lg: 5 }, backgroundColor: "whitesmoke" }}>
            <h2>{'< Testimonials />'}</h2>
            {isLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                    <CircularProgress />
                </Box>
            ) : isError ? (
                <Typography variant="h5" color="error">
                    Error fetching data
                </Typography>
            ) : (
                <div className="slider-container">
                    <Slider {...settings}>
                        {ratings.map((item) => (
                            <Card key={item.id} sx={{
                                margin: {lg:"0 10px",xs:"0 2px"},
                                minHeight: "50vh",
                                transform: "scale(0.95)",
                                boxShadow: "rgba(0, 0, 0, 0.35)",
                            }}>
                                <CardActionArea>
                                    <CardActions style={{ marginTop: 20 }}>
                                        {typeof item.totalRating === 'number' ? (
                                            <Rating size="medium" value={item.totalRating} readOnly precision={0.5} sx={{
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

                                    <Typography color="text.secondary" sx={{ height: "18vh", margin: 3, textAlign: "center" }}>
                                        {item.suggestion}
                                    </Typography>

                                    <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: 2 }}>
                                        <ImQuotesRight color='#195a34' size={25} style={{}} />
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection:{lg:"row",xs:"row"}, padding: 2, color: "white", backgroundColor: "#60968B", borderRadius: "10px" }}>

                                        <Avatar sx={{ width: 55, height: 55, backgroundColor: "whitesmoke", color: "black", alignSelf: "center" }}>
                                            {item.shortName || ''}
                                        </Avatar>
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                {item.fullName}
                                            </Typography>
                                            <Typography>{item.profession}</Typography>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Slider>
                </div>
            )}
        </Box>
    );
};

export default Testimonial;
