import React from "react";
import * as Yup from "yup";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "react-query";
import { SlLocationPin } from "react-icons/sl";
import { SiMinutemailer } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slice/snackbarSlice";
import { $axios } from "../lib/axios";
import { Formik } from "formik";

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
    <Box
      id="contact"
      sx={{ padding: { lg: 9, xs: 1 }, backgroundColor: "whitesmoke",position: "relative"
    }}
    >
      <h1>Contact</h1>
      <div className="bor-btm-section-header"></div>
      <h3>Feel free to reach out to me for any questions or opportunities!</h3>

      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", mb: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "center",
       
        }}
      >
        <Box
          sx={{
            backgroundColor: " #6497B1",
            width: "25%",
            height: "400px",
            padding: 1,
            margin:-4,
            zIndex:2
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", margin: 2, gap: 2,}}
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
        </Box>

        <Box
          sx={{
            backgroundColor: "#B3CDE0",
            width: "35%",
            marginTop:7,
            height: "410px",
            opacity:0.8
          }}
        >
                <Typography sx={{paddingLeft:4}}>Feel free to reach out to me for any questions or opportunities!</Typography>

          <Box
            sx={{
              width: { lg: "30%", md: "300px", xs: "300px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              padding: 2,
              margin:"auto"
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
                    width: "300px",
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
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
