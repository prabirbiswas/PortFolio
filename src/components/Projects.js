import { Box, Grid, Divider, Typography } from "@mui/material";
import Project from "../Project";
import Xaviour from "../images/xaviour.png"
import EMI from "../images/EMI.png"

const Projects = () => {
  const Projects = [
    {
      title: "Xaviour",
      desc: "The First Person Shooting Survival Game built with Unity and C#",
      image: Xaviour,
      githubLink: "https://github.com/prabirbiswas/Xaviour",
      techStack: "Unity, C#",
    },
    {
      title: "EMI Calculator",
      desc: "EMI Calculator is an android application giving you a chance to calculate the EMI ",
      image: EMI,
      githubLink: "https://github.com/prabirbiswas/EMI-Calculator",
      techStack: "Android, Java",
    },
    
  ];

  return (
    <Box
      id="Projects"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        p: "10px",
        color:"#2F325A",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography variant="h5" component="h4">
          My Projects
        </Typography>
      </Divider>
      <Grid
        container
        columnSpacing={5}
        spacing={2}
        padding={5}
        rowSpacing={5}
        columns={{ xs: 3, sm: 4, md: 9, lg: 12 }}
        justifyContent="center"
      >
        {Projects.map((project, index) => (
          <Grid item xs={2} sm={2} md={3} lg={3} key={index}>
            <Project
              title={project.title}
              desc={project.desc}
              image={project.image}
              githubLink={project.githubLink}
              techStack={project.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Projects;
