import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { COLOR } from "index";
import React, { useState } from "react";

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
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(37, 37, 37, 0.8)",
    borderRadius: 8,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 2,
    width: "20%",
    backgroundColor: COLOR.primary,
    borderRadius: 25,
    margin: 16,
  },
}));

const PRODUCTS = [
  {
    title: "Lemon-aid",
    image: "lemon-aid.svg",
    description: "Recipe sharing platform",
    pos: "Front-end Developer",
  },
  {
    title: "Dimo",
    image: "dimo.svg",
    description: "Ticket management website",
    pos: "Web Developer",
  },
  {
    title: "Tickit",
    image: "tickit.svg",
    description: "Ticket selling mobile app",
    pos: "Mobile Developer",
  },
];

function Porfolio() {
  const classes = homeStyles();
  const [hover, setHover] = useState(-1);
  return (
    <div className={classes.root} id="porfolio">
      <Container maxWidth="lg" className={classes.about}>
        <Typography variant="h2" style={{ fontWeight: 800, marginBottom: 48 }}>
          Portfolio
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          {PRODUCTS.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <div
                style={{ position: "relative", borderRadius: 8 }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(-1)}
              >
                <img
                  src={require(`assets/${item.image}`)}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                {hover === index && (
                  <div className={classes.paper}>
                    <Typography variant="h5" color="secondary">
                      <strong>{item.title}</strong>
                    </Typography>
                    <Typography color="secondary">
                      {item.description}
                    </Typography>
                    <div className={classes.line} />
                    <Typography color="secondary">{item.pos}</Typography>
                  </div>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Porfolio;
