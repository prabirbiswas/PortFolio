import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Fab,
  Hidden,
  CardMedia,
} from "@mui/material";

import theme from "../theme";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReactRotatingText from "react-rotating-text";
import { makeStyles } from "@mui/styles";
import profilePic from "../images/profile-pic.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const FrontPage = () => {
  const useStyles = makeStyles({
    name: {
      position: "relative",
      top: "2rem",
      margin: "0.5rem 1rem",
      fontWeight: "bold",
      color: "#2F325A",
    },
    topText: {
      position: "relative",
      top: "2rem",
      margin: "0 1.4rem",
      color: "#2F325A",
    },
    bottomText: {
      position: "relative",
      top: "2rem",
      margin: "0 1.4rem",
      fontSize: "1.5rem",
      color: "#2F325A",
    },
    button: {
      position: "relative",
      top: "4rem",
      fontSize: "3.75rem",
      color: "#2F325A",
    },
    backToTopButton: {
      position: "fixed",
      bottom: "0",
      right: "0",
      margin: "1rem",
      zIndex: "99999",
      color: "#2F325A",
    },
    backToTopButtonMobile: {
      margin: "0.8rem",
      marginBottom: "3rem",
      color: "#2F325A",
    },
  });
  const classes = useStyles();

  // makes the typing animation run on an infinite loop
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "95vh",
        backgroundColor: "#F9C6D0",
      }}
      id="Top"
    >
      <CardMedia
        component="img"
        image={profilePic}
        sx={{
          width: "250px",
          borderRadius: "50%",
          borderColor: "primary",
          borderWidth: "2px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        }}
      />
      <Typography className={classes.topText} variant="h3" align="center">
        Hi, my name is
      </Typography>
      <Typography className={classes.name} variant="h2" align="center">
        Prabir Biswas.
      </Typography>
      <Typography className={classes.bottomText} align="center">
        <ReactRotatingText
          items={["Full Stack Web Developer", "Android Developer "]}
          pause={800}
        />
      </Typography>
      <IconButton
        className={classes.button}
        aria-label="Scroll Down"
        onClick={() => scrollTo("AboutMe")}
      >
        <KeyboardArrowDownIcon fontSize="1.5rem" />
      </IconButton>
      <Hidden smDown>
        <Fab
          className={classes.backToTopButton}
          variant="extended"
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
          Back to Top
        </Fab>
      </Hidden>
      <Hidden smUp>
        <Fab
          className={`${classes.backToTopButton} ${classes.backToTopButtonMobile}`}
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Hidden>
    </Box>
  );
};

export default FrontPage;
