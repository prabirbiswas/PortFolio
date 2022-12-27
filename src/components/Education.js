import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";


const Education = () => {
  return (
    <Box
      id="Education"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#F9C6D0",
        color: "#2F325A",
        p: "20px",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography variant="h5" component="h4">
          My Education
        </Typography>
      </Divider>
      <Timeline position="alternate" color="common.white">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#2F325A"
          >
            2019 to 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector style={{backgroundColor:"#2F325A"}}/>
            <TimelineDot style={{backgroundColor:"#2F325A"}}></TimelineDot>
            <TimelineConnector style={{backgroundColor:"#2F325A"}} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Shri Ramdeobaba College of Engineering and management
            </Typography>
            <Typography>Master of Computer Application</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="#2F325A"
          >
            2016 to 2019{" "}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector style={{backgroundColor:"#2F325A"}}/>
            <TimelineDot style={{backgroundColor:"#2F325A"}}></TimelineDot>
            <TimelineConnector style={{backgroundColor:"#2F325A"}} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              G. H. Raisoni Institute of Information Techonlogy, Nagpur
            </Typography>
            <Typography>Bachelor of Computer Application</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#2F325A"
          >
            2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector style={{backgroundColor:"#2F325A"}} />
            <TimelineDot style={{backgroundColor:"#2F325A"}}></TimelineDot>
            <TimelineConnector style={{backgroundColor:"#2F325A"}}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Shivaji High School and Junior Science College, Gadchiroli
            </Typography>
            <Typography>HSC - Science(PCMB-IT)</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
export default Education;
