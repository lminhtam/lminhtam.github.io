import {
  Button,
  ClickAwayListener,
  Fab,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Zoom,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { COLOR } from "index";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { animateScroll as scroll, Link } from "react-scroll";
import "../App.css";

const headerStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 700,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  root: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    zIndex: 100,
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = headerStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    style={{ backgroundColor: COLOR.carbon }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const HEADER = [
  {
    title: "Home",
    to: "home",
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Skills",
    to: "skill",
  },
  {
    title: "Resume",
    to: "resume",
  },
  {
    title: "Porfolio",
    to: "porfolio",
  },
  {
    title: "Contact",
    to: "contact",
  },
];

export default function ElevateAppBar(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: window.innerHeight - 100,
  });

  const classes = headerStyles();
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        style={{
          backgroundColor: trigger ? COLOR.carbon : "transparent",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <a href=".">
            <img src={require("assets/logo.svg")} width={48} />
          </a>
          <div>
            {isDesktopOrLaptop ? (
              HEADER.map((item) => (
                <Button
                  color="secondary"
                  variant="text"
                  className={classes.button}
                >
                  <Link
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </Button>
              ))
            ) : (
              <IconButton onClick={handleClick}>
                <FiMenu size={28} color="white" />
              </IconButton>
            )}
          </div>
          <Popper
            open={!!anchorEl}
            anchorEl={anchorEl}
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="menu-item-grow"
                style={{
                  transformOrigin: "center top",
                  backgroundColor: COLOR.carbon,
                  width: "100vw",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList>
                      {HEADER.map((item) => (
                        <MenuItem>
                          <Link
                            activeClass="active"
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            style={{ fontWeight: 700, color: "white" }}
                          >
                            {item.title}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <IoIosArrowUp size={28} color="white" />
        </Fab>
      </ScrollTop>
    </>
  );
}
