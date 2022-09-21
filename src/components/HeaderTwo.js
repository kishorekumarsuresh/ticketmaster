import React from "react";
import { makeStyles } from "@mui/styles";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundImage: "url('/image/heas642.jpg')",
    height: "90px",
  },
  div1: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "Averta,Helvetica Neue,Helvetica,Arial,sans-serif;",
    color: "white",
  },
  hed: {
    border: ".1px solid white",
    borderRadius: "12px",
    padding: "10px",

    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    cursor: "pointer",
  },
  Hed: {
    cursor: "pointer",
    color: "white",
  },
  link: {
    textDecoration: "none",
  },
  quote: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function HeaderTwo() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.div}>
        <div className={classes.div1}>
          <Link className={classes.link} to="/">
            {" "}
            <h2 className={classes.Hed}>
              <i>ticketmaster</i>
            </h2>
          </Link>
          <h3 className={classes.quote}>
            Shop millions of live events and discover can't-miss concerts,
            games, theater and more.
          </h3>
          <h4>
            <GoogleAuth />
          </h4>
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;
