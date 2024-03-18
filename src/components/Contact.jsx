import React from 'react'
import * as Yup from 'yup';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import { useMutation } from 'react-query';
import { SlLocationPin } from 'react-icons/sl';
import { SiMinutemailer } from 'react-icons/si';
import { MdLocalPhone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { openErrorSnackbar, openSuccessSnackbar } from '../store/slice/snackbarSlice';
import { $axios } from '../lib/axios';
import { Formik } from 'formik';


const Contact = () => {
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
    <Box id="contact" sx={{ padding: 9,backgroundColor:"whitesmoke" }}>
    <h1>Contact</h1>
    <div className="bor-btm-section-header"></div>
    <h3>Feel free to reach out to me for any questions or opportunities!</h3>

    <Box sx={{ gap: 5, display: "flex", flexDirection: "row" }}>
      <Container sx={{ gap: 4, }}>
        <Box sx={{ display: "flex", flexDirection: "row", padding: 2, gap: 2 }}>
          <Avatar variant="rounded" sx={{ bgcolor: "#243B55", width: 75, height: 75, }}>
            <SlLocationPin size={24} />
          </Avatar>
          <Typography sx={{ alignItems: "center", textAlign: "left" }}>Address: <br /> Bhulankhel-5, Madhyapur Thimi, Bhaktapur, Nepal</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", padding: 2, gap: 2 }}>
          <Avatar variant="rounded" sx={{ bgcolor: "#243B55", width: 75, height: 75, }}>
            <SiMinutemailer size={24} />
          </Avatar>
          <Typography sx={{ alignItems: "center", textAlign: "left" }}>Email: <br /> nikillawo7@gmail.com</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", padding: 2, gap: 2 }}>
          <Avatar variant="rounded" sx={{ bgcolor: "#243B55", width: 75, height: 75, }}>
            <MdLocalPhone size={24} />
          </Avatar>
          <Typography sx={{ alignItems: "center", textAlign: "left" }}>Phone: <br /> +977 9823525431</Typography>
        </Box>
      </Container>

      <Container>
        <Box
          sx={{
            width: "400px",
            minHeight: "400px",
            borderRadius: "10px",
            margin: "auto",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "white"
          }}
        >
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              location: '',
              message: '',
            }}
            validationSchema={Yup.object({
              fullName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required*'),
              email: Yup.string().email('Invalid email address').required('Required*'),
              location: Yup.string().max(55).required('Required*'),
              message: Yup.string().max(55).required('Required*'),
            })}
            onSubmit={async (values) => {
              await mutate(values)
            }}
          >
            {formik => (
              <form
                onSubmit={formik.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                <TextField label="Full Name" {...formik.getFieldProps("fullName")} />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="error-message">{formik.errors.fullName}</div>
                ) : null}

                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}

                <TextField label="Location" {...formik.getFieldProps("location")} />
                {formik.touched.location && formik.errors.location ? (
                  <div className="error-message">{formik.errors.location}</div>
                ) : null}



                <TextField label="Message" {...formik.getFieldProps("message")} multiline rows={4} />
                {formik.touched.message && formik.errors.message ? (
                  <div className="error-message">{formik.errors.message}</div>
                ) : null}

                <Button type="submit" color="success" variant="contained">
                  Send Message
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>

  </Box>
  )
}

export default Contact