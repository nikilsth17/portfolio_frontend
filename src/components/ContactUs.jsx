import React from "react";
import * as Yup from "yup";

import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { $axios } from "../lib/axios";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slice/snackbarSlice";
import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { SlLocationPin } from "react-icons/sl";
import { SiMinutemailer } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { Formik } from "formik";
import { IoIosRocket } from "react-icons/io";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

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
    <Box id="contact" sx={{ paddingTop: { md: 9, xs: 1, lg: 9 },backgroundColor: "whitesmoke" }}>
      <section>
        <div className="container">
          <div className="contactInfo">
            <Typography>
              Feel free to reach out to me for any questions or opportunities!
            </Typography>
            <div style={{display:"flex",flexDirection:"column",gap:20,marginTop:10}}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Avatar variant="rounded" sx={{ width: 54, height: 54,background:"#D3D3D3",color:"#000" }}>
                <SlLocationPin size={24} />
              </Avatar>
              <Typography sx={{ alignItems: "center", textAlign: "left" }}>
                Bhulankhel-5, Madhyapur Thimi,Bhaktapur, Nepal
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Avatar variant="rounded" sx={{ width: 54, height: 54,background:"#D3D3D3",color:"#000"  }}>
                <SiMinutemailer size={24} />
              </Avatar>
              <Typography sx={{ alignItems: "center", textAlign: "left" }}>
                nikillawo7@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Avatar variant="rounded" sx={{ width: 54, height: 54,background:"#D3D3D3",color:"#000"  }}>
                <MdLocalPhone size={24} />
              </Avatar>
              <Typography sx={{ alignItems: "center", textAlign: "left" }}>
                +977 9823525431
              </Typography>
            </Box>
            </div>
           
            <Divider variant="middle" sx={{ padding: 1 }} />

            <Box
              sx={{
                padding: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FaFacebookSquare size={24} color="#313638" />
              <FaInstagramSquare size={24} color="#313638" />
              <FaLinkedin size={24} color="#313638" />
              <FaGithub size={24} color="#313638" />
            </Box>
          </div>

          <div className="contactForm">
            <Typography sx={{ fontSize: 22, fontWeight: 600 }}>
              Send us a message
              <IoIosRocket color="red" size={28} />
            </Typography>

            <Box
              sx={{
                width: { lg: "100%", md: "300px", xs: "305px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                margin: "auto",
                paddingTop: "35px",
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
    </Box>
  );
};

export default ContactUs;
