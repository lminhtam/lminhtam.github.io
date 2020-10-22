import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { COLOR } from "index";
import moment from "moment";
import React from "react";
import { useMediaQuery } from "react-responsive";

const homeStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.lightWhite,
    paddingTop: theme.spacing(27),
    paddingBottom: theme.spacing(6),
  },
  avatar: {
    width: "75%",
    resize: "contain",
  },
  about: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    textAlign: "justify",
  },
}));

function About() {
  const classes = homeStyles();
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  return (
    <div className={classes.root} id="about">
      <Container
        maxWidth="lg"
        className={classes.about}
        style={{ flexDirection: isDesktopOrLaptop ? "row" : "column" }}
      >
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <img
            src={require("assets/big_avatar.jpg")}
            alt="avatar"
            className={classes.avatar}
            style={{ width: isDesktopOrLaptop ? "75%" : "100%" }}
          />
        </div>
        <div style={{ flex: 1.2, marginTop: isDesktopOrLaptop ? 0 : 24 }}>
          <Typography variant="h2" style={{ fontWeight: 800 }}>
            About Me
          </Typography>
          <Typography variant="body1" className={classes.description}>
            My name is Minh Tam Luong. I'm a Front-end Developer based in Ho Chi
            Minh City, Vietnam, and I'm very passionate and dedicated to my
            work. With 6 months experience as a React Native Developer, I have
            acquired the skills necessary to learn and participate in building
            website with ReactJS. I also aim to be a Fullstack Developer.
          </Typography>
          <div
            className={classes.about}
            style={{
              border: `2px solid ${COLOR.primary}`,
              borderRadius: 8,
              padding: 24,
              flexDirection: isDesktopOrLaptop ? "row" : "column",
            }}
          >
            <div>
              <Typography variant="body1">
                <strong>Name:</strong> Minh Tam Luong
              </Typography>
              <Typography variant="body1">
                <strong>Age:</strong>{" "}
                {moment(new Date()).diff(moment("1999/11/24"), "years")}
              </Typography>
              <Typography variant="body1">
                <strong>Phone:</strong> (+84) 076 7494 146
              </Typography>
            </div>
            <div>
              <Typography variant="body1">
                <strong>Address:</strong> District 4, HCMC
              </Typography>
              <Typography variant="body1">
                <strong>Experience:</strong> 6 Months
              </Typography>
              <Typography variant="body1">
                <strong>Skype:</strong> (+84) 076 7494 146
              </Typography>
            </div>
          </div>
          <Button
            color="primary"
            variant="contained"
            size="large"
            style={{ marginTop: 36 }}
          >
            <a
              href="assets/CV_Luong_Minh_Tam.pdf"
              download
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
              }}
            >
              Download CV
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default About;
