import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
//import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Display from "./Display";
import { TextField } from "@mui/material";
const useStyles = makeStyles({
  div1:{
    marginBottom:'60px'
  },
  div2: {
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Averta,Helvetica Neue,Helvetica,Arial,sans-serif;",
    paddingTop: "30px",
    paddingBottom:"50px",
    paddingLeft: "5px",
    letterSpacing:".3px",
    fontSize:'24px',
    fontWeight:'600'
  },
  div3: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    whiteSpace: "nowrap",
  },

  card: {
    height:'150px',
    width:"270px",
    marginTop:'15px',
    boxShadow :'0.5px 0.5px 0.5px 0.5px black',
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  textField:{
    marginTop:'20px !important',
    boxShadow :'0.5px 0.5px 0.5px 0.5px grey'
  },
  textField3:{
    marginTop:'20px !important',
    boxShadow :'0.5px 0.5px 0.5px 0.5px grey',
    width:'390px'
  },
});

function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.div1}>
      <TextField className={classes.textField} placeholder='City or Zip Code'></TextField>
    <TextField className={classes.textField} placeholder='Select Date'>t1</TextField>
    <TextField className={classes.textField3} placeholder='Search for artist, venues , events  '>
    </TextField>
      <Display/>
      {/* <div className={classes.div2}>
        Top Selling
        <br />
      </div>
      <div className={classes.div3}>
        <Card className={classes.card}>
          <CardMedia>img</CardMedia>
          <CardActions>but 1</CardActions>{" "}
        </Card>
        <Card className={classes.card}>card 2</Card>
        <Card className={classes.card}>card 3</Card>
        <Card className={classes.card}>card 4</Card>
      </div> */}
      
    </div>
  );
}

export default Homepage;
