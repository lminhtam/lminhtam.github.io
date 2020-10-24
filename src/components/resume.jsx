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
import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { animated, useSpring } from "react-spring";

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
    height: 90,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
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
    company: "Ban Vien Corporation",
    des: "Participated in develop mobile app using React Native framework",
  },
];

function Resume() {
  const classes = homeStyles();
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const [move, setMove] = useState(false);
  const posAnimated = useSpring({
    to: { opacity: move ? 1 : 0, marginRight: move ? 0 : -500 },
    from: { opacity: 0, marginRight: -500 },
    config: { duration: 400 },
  });
  const posAnimatedLeft = useSpring({
    to: { opacity: move ? 1 : 0, marginLeft: move ? 0 : -500 },
    from: { opacity: 0, marginLeft: -500 },
    config: { duration: 400 },
  });

  const TimelineVer = (props) => {
    const { item, index } = props;

    useEffect(() => {
      document.addEventListener("scroll", trackScrolling);
      return () => document.removeEventListener("scroll", trackScrolling);
    }, []);

    const isBottom = (el) => {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    const trackScrolling = () => {
      const wrappedElement = document.getElementById(`timeline${index}`);
      if (isBottom(wrappedElement)) {
        setMove(true);
        document.removeEventListener("scroll", trackScrolling);
      }
    };

    if (!move) {
      return <div id={`timeline${index}`} />;
    }

    return (
      <animated.div
        style={move ? (index % 2 === 0 ? posAnimated : posAnimatedLeft) : {}}
      >
        <Paper
          elevation={0}
          className={classes.timeline}
          id={`timeline${index}`}
        >
          <BsDot size={48} color={COLOR.primary} />
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ textAlign: "center", height: 140 }}
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
      </animated.div>
    );
  };

  const TimelineHor = (props) => {
    const { item, index } = props;

    useEffect(() => {
      document.addEventListener("scroll", trackScrolling);
      return () => document.removeEventListener("scroll", trackScrolling);
    }, []);

    const isBottom = (el) => {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    };

    const trackScrolling = () => {
      const wrappedElement = document.getElementById(`timeline${index}`);
      if (isBottom(wrappedElement)) {
        setMove(true);
        document.removeEventListener("scroll", trackScrolling);
      }
    };

    if (!move) {
      return <div id={`timeline${index}`} />;
    }

    if (index % 2 === 0) {
      return (
        <animated.div style={move ? posAnimated : {}} id={`timeline${index}`}>
          <TimelineItem style={{ marginBottom: 28 }}>
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary">
                {item.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector style={{ backgroundColor: COLOR.neutral }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h6">
                  <strong>{item.company}</strong>
                </Typography>
                <Typography>{item.des}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </animated.div>
      );
    }

    return (
      <animated.div style={move ? posAnimatedLeft : {}} id={`timeline${index}`}>
        <TimelineItem style={{ marginBottom: 28 }}>
          <TimelineOppositeContent>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h6">
                <strong>{item.company}</strong>
              </Typography>
              <Typography>{item.des}</Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector style={{ backgroundColor: COLOR.neutral }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body1" color="textSecondary">
              {item.time}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </animated.div>
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
            {RES.map((item, index) => (
              <TimelineHor item={item} index={index} />
            ))}
          </Timeline>
        ) : (
          RES.map((item, index) => <TimelineVer item={item} index={index} />)
        )}
      </Container>
    </div>
  );
}

export default Resume;
