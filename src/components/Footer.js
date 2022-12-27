import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@mui/styles";

const Footer = () => {
  const useStyles = makeStyles({
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.2rem",
      backgroundColor: "#2F325A",
    },
    text: {
      color: "#eeeeee",
    },
  });
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.2rem",
        backgroundColor: "#2F325A",
      }}
    >
      <Stack direction="row">
        <Typography color="common.white">Made with &nbsp;</Typography>
        <FavoriteIcon color="error" />
        <Typography color="common.white"> &nbsp; by Prabir Biswas</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
