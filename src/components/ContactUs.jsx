
import React from 'react'
import * as Yup from "yup";

import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { $axios } from '../lib/axios'
import { openErrorSnackbar, openSuccessSnackbar } from '../store/slice/snackbarSlice'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { SlLocationPin } from 'react-icons/sl'
import { SiMinutemailer } from 'react-icons/si'
import { MdLocalPhone } from 'react-icons/md'
import { Formik } from 'formik'

const ContactUs = () => {
    const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationKey: ["submit-form"],
    mutationFn: async (values) => {
      return await $axios.post("/contact/add", values);
    },
    onSuccess: (res) => {
      // console.log("Submit successful", data);
      dispatch(openSuccessSnackbar(res?.data?.message));
    },
    onError: (error) => {
      console.error("Something went wrong", error);
      dispatch(openErrorSnackbar(error?.res?.data?.message));
    },
  });
  return (
    <div>
 <Typography >Feel free to reach out to me for any questions or opportunities!</Typography>
 <section>
          
          <div className='container'>
              <div className='contactInfo'>
             
                <Box
                  sx={{ display: "flex", flexDirection: "row",}}
                >
                  
                    <SlLocationPin size={24} />
                  <Typography sx={{ alignItems: "center", textAlign: "left" }}>
                    Bhulankhel-5, Madhyapur Thimi,Bhaktapur, Nepal
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", margin: 2, gap: 2 }}
                >
                  
                    <SiMinutemailer size={24} />
                  <Typography sx={{ alignItems: "center", textAlign: "left" }}>
                    nikillawo7@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row",margin:2, gap: 2 }}
                >
                 
                    <MdLocalPhone size={24} />
                  <Typography sx={{ alignItems: "center", textAlign: "left" }}>
                    +977 9823525431
                  </Typography>
                </Box>
              </div>
              <div className='contactForm'>
             
      
                <Box
                  sx={{
                    width: { lg: "100%", md: "300px", xs: "305px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    margin:"auto",
                  }}
                >
                  <Formik
                    initialValues={{
                      fullName: "",
                      email: "",
                      location: "",
                      message: "",
                    }}
                    validationSchema={Yup.object({
                      fullName: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required*"),
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Required*"),
                      location: Yup.string().max(55).required("Required*"),
                      message: Yup.string().max(55).required("Required*"),
                    })}
                    onSubmit={async (values) => {
                      await mutate(values);
                    }}
                  >
                    {(formik) => (
                      <form
                        onSubmit={formik.handleSubmit}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                      width:{lg:"100%",xs:"80%"}
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                          <TextField
                            variant="standard"
                            label="Full Name"
                            {...formik.getFieldProps("fullName")}
                            fullWidth
                          />
      
                          <Divider orientation="vertical" flexItem />
      
                          <TextField
                            variant="standard"
                            label="Location"
                            {...formik.getFieldProps("location")}
                            fullWidth
                          />
                        </Box>
      
                        <TextField
                          variant="standard"
                          label="Email"
                          {...formik.getFieldProps("email")}
                        />
      
                        <TextField
                          label="Message"
                          {...formik.getFieldProps("message")}
                          multiline
                          rows={3}
                        />
      
                        <Button type="submit" color="success" variant="contained">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </Formik>
                </Box>
              </div>
          </div>
          </section>
    </div>
  

  )
}

export default ContactUs