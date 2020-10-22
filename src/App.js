import { Typography } from "@material-ui/core";
import About from "components/about";
import Contact from "components/contact";
import ElevateAppBar from "components/header";
import Home from "components/home";
import Porfolio from "components/porfolio";
import Resume from "components/resume";
import Skill from "components/skill";
import { COLOR } from "index";
import moment from "moment";
import React from "react";

function App() {
  return (
    <>
      <ElevateAppBar />
      <Home />
      <About />
      <Skill />
      <Resume />
      <Porfolio />
      <Contact />
      <div
        style={{
          width: "100%",
          backgroundColor: COLOR.carbon,
          paddingBottom: 48,
          paddingTop: 48,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" style={{ color: "white" }}>
          All Right Reserved © {moment(new Date()).year()}{" "}
          <a href="." style={{ textDecoration: "none", color: COLOR.primary }}>
            <b>LMT</b>
          </a>
        </Typography>
      </div>
    </>
  );
}

export default App;
