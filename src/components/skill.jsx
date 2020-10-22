import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
  description: {
    marginBottom: theme.spacing(1),
    // color: COLOR.lightWhite
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    borderRadius: 9,
  },
  colorPrimary: {
    backgroundColor: COLOR.neutral,
  },
  bar: {
    borderRadius: 9,
    backgroundColor: COLOR.primary,
  },
}))(LinearProgress);

const SKILLS = [
  {
    title: "JAVASCRIPT",
    value: 80,
  },
  {
    title: "REACT JS",
    value: 60,
  },
  {
    title: "NODE JS",
    value: 50,
  },
  {
    title: "PYTHON",
    value: 50,
  },
  {
    title: "C#",
    value: 60,
  },
  {
    title: "JAVA",
    value: 60,
  },
];

function Skill() {
  const classes = homeStyles();
  return (
    <div className={classes.root} id="skill">
      <Container maxWidth="lg" className={classes.about}>
        <Typography variant="h2" style={{ fontWeight: 800, marginBottom: 48 }}>
          My Skills
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          {SKILLS.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Typography variant="body1" className={classes.description}>
                {item.title}
              </Typography>
              <BorderLinearProgress value={item.value} variant="determinate" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Skill;
