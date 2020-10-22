import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import { COLOR } from "index";
import React from "react";

const homeStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.lightWhite,
    paddingTop: theme.spacing(21),
    paddingBottom: theme.spacing(6),
  },
  about: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "transparent",
    border: `2px solid ${COLOR.primary}`,
    borderRadius: 8,
  },
}));

function Resume() {
  const classes = homeStyles();
  return (
    <div className={classes.root} id="resume">
      <Container maxWidth="lg" className={classes.about}>
        <Typography variant="h2" style={{ fontWeight: 800, marginBottom: 48 }}>
          My Resume
        </Typography>
        <Timeline align="alternate" style={{ width: "100%" }}>
          <TimelineItem style={{ marginBottom: 28 }}>
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary">
                September 2017 - September 2021
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector style={{ backgroundColor: COLOR.neutral }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h6">
                  <strong>VNUHCM - University of Science</strong>
                </Typography>
                <Typography>Majored in Software Engineering</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem style={{ marginBottom: 28 }}>
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary">
                September 2019 - December 2019
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector style={{ backgroundColor: COLOR.neutral }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h6">
                  <strong>Coderschool</strong>
                </Typography>
                <Typography>
                  Participated as a Fresher React Native Developer in Developer
                  Circles VietNam Innovation Challenge
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem style={{ marginBottom: 28 }}>
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary">
                November 2019 - July 2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h6">
                  <strong>Ban Vien Corporation - Mobile Developer</strong>
                </Typography>
                <Typography>
                  Participated in develop mobile app using React Native
                  framework
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </div>
  );
}

export default Resume;
