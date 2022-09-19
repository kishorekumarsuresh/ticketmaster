import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";

const useStyles = makeStyles({
  div:{
    backgroundImage: "url('/image/heaser2m.jpg')",
    height:'200px'
  },
  div1: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "Averta,Helvetica Neue,Helvetica,Arial,sans-serif;",
    color:'white'
  },
  div2: {
    fontFamily: "Averta,Helvetica Neue,Helvetica,Arial,sans-serif;",
    color:'white'
  },
  
  hed:{
    border:'.1px solid white',
    borderRadius: "12px",
    padding:'10px',
    "&:hover": { 
      backgroundColor:'white',
      color:'black'
     },
    cursor:'pointer'
  },
  Hed:{
    cursor:'pointer'
  }
 
});
function Header() {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.div}>
      <div>
      <div className={classes.div1}>
        <h2 className={classes.Hed} ><i>ticketmaster</i></h2>
        <h4 className={classes.hed} onClick={() => alert("hello")}>Concerts</h4>
        <h4 className={classes.hed}>Sports</h4>
        <h4 className={classes.hed}>Arts & Theatre</h4>
        <h4 className={classes.hed}>Family</h4>
        <h4 className={classes.hed}>More</h4>
        <h4 className={classes.hed}>Help</h4>
        <h4 className={classes.hed}>Sign in</h4>
      </div>
      </div>
      <div className={classes.div2}>
        <h1>Let's make Live happen</h1>
        <h3>
          Shop millions of live events and discover can't-miss concerts, games,
          theater and more.
        </h3>
        <div className={classes.div3}>
          
        </div>
      </div>
    </div>
    <div className={classes.textF}>
    
    </div>
    </div>
  );
}

export default Header;
