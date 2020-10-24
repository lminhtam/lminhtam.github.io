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
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BsDot } from "react-icons/bs";

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
  timeline: {
    textAlign: "center",
    backgroundColor: "transparent",
  },
}));

const RES = [
  {
    time: "September 2017 - September 2021",
    company: "VNUHCM - University of Science",
    des: "Majored in Software Engineering",
  },
  {
    time: "September 2019 - December 2019",
    company: "Coderschool",
    des:
      "Participated as a Fresher React Native Developer in Developer Circles VietNam Innovation Challenge",
  },
  {
    time: "November 2019 - July 2020",
    company: "Ban Vien Corporation - Mobile Developer",
    des: "Participated in develop mobile app using React Native framework",
  },
];

function Resume() {
  const classes = homeStyles();
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const TimelineVer = (props) => {
    const { item, index } = props;
    const itemRef = useRef();
    const [referenceNode, setReferenceNode] = useState();

    // useEffect(() => {
    //   return () => referenceNode.removeEventListener("scroll", handleScroll);
    // }, []);

    // const handleScroll = (event) => {
    //   const node = event.target;
    //   console.log(node);
    //   const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
    //   console.log(bottom);
    //   if (bottom) {
    //     console.log("BOTTOM REACHED:", bottom);
    //   }
    // };

    // const paneDidMount = (node) => {
    //   if (node) {
    //     node.addEventListener("scroll", handleScroll);
    //     setReferenceNode(node);
    //   }
    // };

    const onScroll = () => {
      if (itemRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = itemRef.current;
        if (scrollTop + clientHeight === scrollHeight) {
          // TO SOMETHING HERE
          console.log("Reached bottom");
        }
      }
    };

    return (
      <Paper
        elevation={0}
        className={classes.timeline}
        ref={itemRef}
        onScroll={() => console.log("hhh")}
        id={`timeline${index}`}
      >
        <BsDot size={48} color={COLOR.primary} />
        <Paper
          elevation={0}
          className={classes.paper}
          style={{ textAlign: "center" }}
        >
          <Typography variant="body1" color="textSecondary">
            {item.time}
          </Typography>
          <Typography variant="h6">
            <strong>{item.company}</strong>
          </Typography>
          <Typography>{item.des}</Typography>
        </Paper>
      </Paper>
    );
  };

  return (
    <div className={classes.root} id="resume">
      <Container maxWidth="lg" className={classes.about}>
        <Typography variant="h2" style={{ fontWeight: 800, marginBottom: 48 }}>
          My Resume
        </Typography>
        {isDesktopOrLaptop ? (
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
                    Participated as a Fresher React Native Developer in
                    Developer Circles VietNam Innovation Challenge
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
        ) : (
          RES.map((item, index) => <TimelineVer item={item} index={index} />)
        )}
      </Container>
    </div>
  );
}

export default Resume;
