import React from "react";
import { AppBar, Box, Button, Typography,Divider } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <AppBar
      id="header"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around", // Changed from "space-around" to "space-between"
        alignItems: "center", // Added to vertically center items
        // height: "70px",
        padding:2,
        backgroundColor: "whitesmoke",
        color: "black",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        width:{xs:"100%"}
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold", // Changed from "fontStyle" to "fontWeight"
          color: "green",
        }}
      >
        लव
      </Typography>
      <Box
        sx={{
          display: { xs: "none", md: "flex" }, // Changed from "xs" to "none"
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <a href="#intro">
          <Typography>About</Typography>
        </a>
        <a href="#skills">
          <Typography>Skills</Typography>
        </a>
        <a href="#experience" rel="noopener noreferrer">
          <Typography>Experience</Typography>
        </a>
        <a href="#project">
          <Typography>Projects</Typography>
        </a>
        <a href="#education">
          <Typography>Education</Typography>
        </a>
        <a href="#contact">
          <Typography>Contact</Typography>
        </a>
      </Box>

      <a href="https://github.com/nikilsth17" target="_blank">
        <Button variant="contained" color="success" sx={{ mr: 2, }}>
          Github Profile
        </Button>
      </a>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box sx={{ p: 1,gap:15 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold", // Changed from "fontStyle" to "fontWeight"
              color: "green",
              mb: 2, // Added margin bottom
            }}
          >
            लव
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column",gap:2}}>
            <a href="#intro" onClick={handleDrawerClose}>
              <Typography variant="h5">About</Typography>
            </a>
            <Divider variant="middle" />

            <a href="#skills" onClick={handleDrawerClose}>
              <Typography variant="h5">Skills</Typography>
            </a>
            <Divider variant="middle" />

            <a href="#experience" onClick={handleDrawerClose}>
              <Typography variant="h5">Experience</Typography>
            </a>
            <Divider variant="middle" />

            <a href="#project" onClick={handleDrawerClose}>
              <Typography variant="h5">Project</Typography>
            </a>
            <Divider variant="middle" />

            <a href="#education" onClick={handleDrawerClose}>
              <Typography variant="h5">Education</Typography>
            </a>
            <Divider variant="middle" />

            <a href="#contact" onClick={handleDrawerClose}>
              <Typography variant="h5">Contact</Typography>
            </a>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
