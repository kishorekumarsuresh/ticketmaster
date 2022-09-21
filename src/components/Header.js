import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import GoogleAuth from "./GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import { selectGenre } from "./redux/ticketAction";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundImage: "url('/image/heaser2m.jpg')",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      height: "110px",
    },
  },
  div1: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "Averta,Helvetica Neue,Helvetica,Arial,sans-serif;",
    color: "white",
    [theme.breakpoints.down("md")]: {
      display: "grid",
      alignItems:'flex-start'
    },
  },
  div2: {
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
    [theme.breakpoints.down("md")]: {
      fontSize:'large'
    },
  },
  div4:{
    display:'flex ',
    flexDirection:'row !important',
    justifyContent:'space-between',
    alignItems:'space-between',
    
    
  },
  hed1:{
    marginRight:'8px',
    marginBottom:'42px',
    cursor: "pointer",
     border: ".1px solid white",
    borderRadius: "10px",
  
    padding: "6px",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  }
}));
function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [genreVal, setGenreVal] = useState("");
  const genre = useSelector((state) => state.ticket);
  const search = useSelector((state) => state.ticket);
  const country = useSelector((state) => state.ticket);
  const header = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div>
      <div className={classes.div}>
        <div>
          <div className={classes.div1}>
            <h2 className={classes.Hed}>
              <em>Ticketmaster</em>
            </h2>
            {!header && (
              <>
              
                <h4
                  className={classes.hed}
                  name="films"
                  onClick={() => {
                    dispatch(selectGenre("films", search, country));
                    setGenreVal("films");
                  }}
                >
                  Films
                </h4>
                <h4
                  className={classes.hed}
                  name="sports"
                  onClick={() => {
                    dispatch(selectGenre("sports", search, country));
                    setGenreVal("sports");
                  }}
                >
                  Sports
                </h4>
                <h4
                  className={classes.hed}
                  name="arts"
                  onClick={() => {
                    dispatch(selectGenre("arts", search, country));
                    setGenreVal("arts");
                  }}
                >
                  Arts & Theatre
                </h4>
                <h4
                  className={classes.hed}
                  name="family"
                  onClick={() => {
                    dispatch(selectGenre("family", search, country));
                    setGenreVal("family");
                  }}
                >
                  Family
                </h4>
                <h4
                  className={classes.hed}
                  name="music"
                  onClick={() => {
                    dispatch(selectGenre("music", search, country));
                    setGenreVal("music");
                  }}
                >
                  Music
                </h4>
                <h4
                  className={classes.hed}
                  name="miscellaneous"
                  onClick={() => {
                    dispatch(selectGenre("miscellaneous", search, country));
                    setGenreVal("miscellaneous");
                  }}
                >
                  Miscellaneous
                </h4>
                <h4>
                  <GoogleAuth />
                </h4>
              </>
            )}
            {header && (
              <div className={classes.div4}>
                
                <h4
                  className={classes.hed1}
                  name="films"
                  onClick={() => {
                    dispatch(selectGenre("films", search, country));
                    setGenreVal("films");
                  }}
                >
                  Films
                </h4>
                <h4
                  className={classes.hed1}
                  name="sports"
                  onClick={() => {
                    dispatch(selectGenre("sports", search, country));
                    setGenreVal("sports");
                  }}
                >
                  Sports
                </h4>
                <h4
                  className={classes.hed1}
                  name="arts"
                  onClick={() => {
                    dispatch(selectGenre("arts", search, country));
                    setGenreVal("arts");
                  }}
                >
                  Arts
                </h4>
                <h4
                  className={classes.hed1}
                  name="family"
                  onClick={() => {
                    dispatch(selectGenre("family", search, country));
                    setGenreVal("family");
                  }}
                >
                  Family
                </h4>
                <h4
                  className={classes.hed1}
                  name="music"
                  onClick={() => {
                    dispatch(selectGenre("music", search, country));
                    setGenreVal("music");
                  }}
                >
                  Music
                </h4>
                <h4>
                  <GoogleAuth />
                </h4>
              </div>
            )}
          </div>
        </div>
        <div className={classes.div2}>
          <h1>Let's make Live happen</h1>
          <h3>
            Shop millions of live events and discover can't-miss concerts,
            games, theater and more.
          </h3>
          <div className={classes.div3}></div>
        </div>
      </div>
      <div className={classes.textF}></div>
    </div>
  );
}

export default Header;

