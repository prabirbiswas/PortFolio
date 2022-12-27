import { Box, Divider, Typography, IconButton } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: "https://github.com/prabirbiswas",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/prabirbiswas/",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/prabirpbiswas",
    },
    {
      icon: <InstagramIcon />,
      url: "https://instagram.com/__prabir__",
    },
  ];
  return (
    <Box
      id="Contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
        m: "0 auto",
        backgroundColor: "#F9C6D0",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "3rem" }}>
        <Typography variant="h5" component="h4" color="#2F325A">
          Connect with me
        </Typography>
      </Divider>
      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="h6" color="#2F325A">
          Email: prabirpbiswas@gmail.com
        </Typography>
      </Box>
      <Divider
        sx={{
          width: "30rem",
          display: "flex",
          mt: "10px",
          mb: "10px",
        }}
        style={{ backgroundColor: "#2F325A" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {socialLinks.map((socialLink) => (
          <IconButton
            key={socialLink.url}
            onClick={() => window.open(socialLink.url)}
            color="#2F325A"
            size="large"
            sx={{
              ":hover": {
                bgcolor: "secondary.main", 
                color: "white",
              },
            }}
          >
            {socialLink.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
export default Contact;
