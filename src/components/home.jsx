import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const homeStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  bg: {
    width: "100%",
    height: "100vh",
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2016/12/12/03/05/sky-1900714_1280.jpg')",
    // "url('https://cdn.pixabay.com/photo/2014/05/30/17/09/paint-358428_1280.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.4,
    filter: "blur(4px)",
    WebkitFilter: "blur(4px)",
  },
  avatar: {
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
}));

function Home() {
  const classes = homeStyles();
  return (
    <div className={classes.root} id="home">
      <div className={classes.bg} />
      <Avatar
        src={require("assets/avatar.jpg")}
        alt="avatar"
        className={classes.avatar}
      />
      <Typography
        variant="h4"
        color="primary"
        style={{ fontWeight: 900, zIndex: 2 }}
      >
        Minh Tam Luong
      </Typography>
      <Typography variant="h6" style={{ zIndex: 2, color: "white" }}>
        A front-end developer
      </Typography>
    </div>
  );
}

export default Home;
