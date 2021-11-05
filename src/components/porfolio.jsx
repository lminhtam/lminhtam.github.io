import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { COLOR } from "index";
import React, { useState } from "react";
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
    width: "100%",
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
    title: "MAM",
    image: "mam.svg",
    description: "Recipe sharing platform",
    pos: "Front-end Developer",
    link: "https://mammam.me/",
  },
  {
    title: "Lemon-aid",
    image: "lemon-aid.svg",
    description: "Recipe sharing platform",
    pos: "Front-end Developer",
    link: "https://lemon-aid-cookbook.github.io/",
  },
  {
    title: "Dimo",
    image: "dimo.svg",
    description: "Ticket management website",
    pos: "Web Developer",
    link: "https://tyt-dimove.github.io/",
  },
  // {
  //   title: "Tickit",
  //   image: "tickit.svg",
  //   description: "Ticket selling mobile app",
  //   pos: "Mobile Developer",
  //   link:
  //     "https://drive.google.com/uc?export=download&id=1Fm7SMKW78LO8BpWxAVLZIsnp6rkIhrI-",
  // },
];

function Porfolio() {
  const classes = homeStyles();
  const [hover, setHover] = useState(null);

  const AnimatedBox = (props) => {
    const { item } = props;
    const heightAnimated = useSpring({
      height: "100%",
      from: { height: "0%" },
    });

    return (
      <animated.div className={classes.paper} style={heightAnimated}>
        <Typography variant="h5" color="secondary">
          <strong>{item.title}</strong>
        </Typography>
        <Typography color="secondary">{item.description}</Typography>
        <div className={classes.line} />
        <Typography color="secondary">{item.pos}</Typography>
      </animated.div>
    );
  };

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
              <a href={item.link} target="_black" id={`pro-${item.title}`}>
                <div
                  style={{ position: "relative", borderRadius: 8 }}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img
                    src={require(`assets/${item.image}`)}
                    style={{ width: "100%", borderRadius: 8 }}
                    alt={item.title}
                  />
                  {hover === index && (
                    <AnimatedBox hoverItem={hover === index} item={item} />
                  )}
                </div>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Porfolio;
