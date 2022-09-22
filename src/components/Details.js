import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderTwo from "./HeaderTwo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const useStyles = makeStyles((theme) => ({
  newdiv2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  card1: {
    width: "370px",
    height: "355px",

    "&:hover": { transform: "scale3d(1.03, 1.03, 1) !important" },
  },
  card2: {
    width: "430px",
    height: "355px",
    marginLeft: "31px !important",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-1px !important",
      width: "370px",
    },
  },
  img1: {
    width: "350px",
    height: "295px",
  },
  div2: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginLeft: "58px",
    },
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "19px",
  },
  newdiv3: {
    paddingTop: "22px",
    paddingLeft: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "rgba(45,55,72,var(--text-opacity))",
    padding: ".75rem",
    height: "20px",
    fontFamily: '"Soleil",sans-serif',
    margin: "0px 5px",
  },
  event: {
    border: ".1px solid white",
    borderRadius: "12px",
    padding: "10px",
    backgroundColor: "whitesmoke",
    color: "grey",
    marginBottom: "12px",
  },
  But1: {
    height: "40px",
    width: "120px",
    marginTop: "20px !important",
    border: "0 solid #e2e8f0",
    padding: "50px 50px",
  },
  But2: {
    height: "40px",
    width: "80px",
    marginTop: "20px !important",
    border: "0 solid #e2e8f0",
    marginRight: "20px !important",
  },
  span: {
    color: "blue",
    cursor: "pointer",
  },
  headertwo: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function Details({ load }) {
  const classes = useStyles();
  const details = useSelector((state) => state.ticket);
  const navig = useNavigate();
  const { name, url, images, dates, info, _embedded } = details.detail;
  const [isReadMore, setIsReadMore] = useState(true);
  const text = info ? info : "not availabe";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <HeaderTwo />
      <div>
        <div className={classes.div2}>
          <Card className={classes.card1}>
            <CardContent>
              {load ? (
                <div style={{ display: "flex", justifyContent:'space-around', padding: '90px 60px'}}>
                  <CircularProgress color="success" />
                  <Typography variant="h5" className={classes.load}>
                    Loading...
                  </Typography>
                </div>
              ) : (
                <img
                  className={classes.img1}
                  src={images[0].url}
                  alt="picture"
                />
              )}
            </CardContent>
          </Card>

          <Card className={classes.card2}>
            <CardContent>
              <div className={classes.newdiv2}>
                <span className={classes.event}>EVENT DETAILS</span>
                <div className={classes.newdiv3}>
                  <Typography variant="body1" color="success">
                    <b> {name} </b>
                  </Typography>
                  <Typography variant="body1">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between!important",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "10px 0px",
                        }}
                      >
                        <CalendarMonthIcon />
                        {dates.start.localDate}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <LocationOnIcon />
                        {_embedded.venues[0].state.name}
                      </span>
                    </div>
                  </Typography>

                  <Typography variant="body1">
                    <u>
                      <b>Description</b>
                    </u>
                  </Typography>
                  <div style={{ textAlign: "justify" }}>
                    {text !== "not available" && isReadMore
                      ? text.slice(0, 100)
                      : text.slice(0, 155)}
                    <span onClick={toggleReadMore} className="read-or-hide">
                      {isReadMore ? (
                        <span className={classes.span}>"...read more"</span>
                      ) : (
                        <span className={classes.span}>" ...show less"</span>
                      )}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between !important",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      className={classes.But2}
                      onClick={() => navig("/")}
                    >
                      <p className={classes.book}>BACK </p>
                    </Button>
                    <a href={url}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.But1}
                      >
                        <p className={classes.book}>BOOK NOW </p>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Details;
