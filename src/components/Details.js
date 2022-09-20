import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderTwo from "./HeaderTwo";
//import { fontSize } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  span: {
    fontSize: "20px",
    marginBottom: "8px",
    color: "rgb(38, 38, 38)",
    fontWeight: "600px",
    fontFamily: '"Averta", Helvetica, Arial, sans-serif',
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  img1: {
    paddingTop: "18px",
    height: "370px",
    width: "570px",
    alt: "picture",
    "&:hover": { transform: "scale3d(1.07, 1.07, 1) !important" },
  },
  media: {
    display: "grid",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingRight: "12px",
  },
  Imgcard: {
    width: "300px",
    height: "220px",
  },
  box: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  div1: {
    border: "0.2px solid grey",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: "20px",
    marginTop: "9px",
    width: "190px",
    height: "180px",
    paddingTop: "12px",
  },
  But1: {
    height: "70px",
    width: "180px",
    marginTop: "60px !important",
    border: "0 solid #e2e8f0",
  },
  But2:{
    height: "70px",
    width: "180px",
    marginTop: "60px !important",
    border: "0 solid #e2e8f0",
    marginRight:'20px !important'
  },
  book: {
    fontFamily: '"Soleil",sans-serif',
    fontSize: "20px",
    fontWeight: "20px",
  },
  title: {
    fontFamily: '"Soleil",sans-serif',
    fontSize: "20px",
    fontWeight: "20px",
    color: "blue",
  },

  Free: {
    color: "rgba(45,55,72,var(--text-opacity))",
    padding: ".75rem",
    border: "0.8px solid grey",
    height: "20px",
    fontFamily: '"Soleil",sans-serif',
    lineHeight: "1.5px",
    borderOpacity: "1px",
  },
  div2: {
    display: "flex",
    flexDirection: "column",
    //alignItems:'center',
    marginRight: "80px",
  },
  content: {
    display: "flex !important",
    flexDirection: "column !important",
    alignContent: "flex-start !important",
    justifyContent: "space-between !important",
  },
  card2content: {
    marginBottom: "20px",
    marginTop: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "9px",
    paddingTop: "4px",
  },
  card: {
    marginTop: "12px",
    
  },
  card2: {
    marginTop: "12px",
    color: "ButtonFace !important",
    width:'250px'
  },
  div4: {
    display: "flex",
    justifyContent: "space-around",
  },
  info: {
    width: "420px",
    fontFamily: '"Soleil",sans-serif',
    fontSize: "20px",
    fontWeight: "20px",
    color: "black",
  },
  event: {
    border: ".1px solid white",
    borderRadius: "12px",
    padding: "10px",
    backgroundColor: "grey",
    color: "whitesmoke",
  },
});

function Details() {
  const classes = useStyles();
  const details = useSelector((state) => state.ticket);
  const navig = useNavigate();
  const {
    name,
    url,
    images,
    dates,
    info,
    pleaseNote,
  } = details.detail;

  return (
    <div>
      <HeaderTwo />
      <div className={classes.div4}>
        <Card classes={classes.card}>
          <img className={classes.img1} src={images[0].url} />
        </Card>

        <Card classes={classes.card2}>
          <CardContent>
            <div className={classes.card2content}>
              <span className={classes.event}>EVENT DETAILS</span>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginTop:'9px'}}>
                <span className={classes.title}>title: {name}</span>
                <br/>
                <span style={{display:'flex', justifyContent:'center' , alignItems:'center'}} >Schedule
                  <CalendarMonthIcon />
                  {dates.start.localDate}
                </span>
                <br/>
                <span className={classes.info}>Info:{
                (info)? info:"Not available"}</span>
                <span className={classes.info}>Note:{(pleaseNote)? pleaseNote : 'Not available'}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Button variant="contained" color="success" className={classes.But2}
      onClick={() => navig('/')}>
          <p className={classes.book}>BACK </p>
        </Button>
      <a href={url}>
        <Button variant="contained" color="secondary" className={classes.But1}>
          <p className={classes.book}>BOOK NOW </p>
        </Button>
      </a>
    </div>
  );
}

export default Details;
