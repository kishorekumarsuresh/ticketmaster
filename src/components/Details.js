import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  card: {
    height: "220px",
    width: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginInlineStart: "220px",
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
    height: "170px",
    width: "270px",
    alt: "picture",
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
});

function Details() {
  const classes = useStyles();
  const details = useSelector((state) => state.ticket);
  const [flag, setFlag] = useState(false);
  const {
    name,
    url,
    images,
    sales,
    dates,
    promoter,
    info,
    pleaseNote,
    venues,
  } = details.detail;
  const { date } = dates;

  return (
    <div className={classes.div}>
      Event Details
      <br />
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h5">
            Event name<span className={classes.span}>:{name}</span>
          </Typography>
          <Typography variant="h5">
            Url
            <span className={classes.span}>
              :<a href={url}>click here for reg</a>
            </span>
          </Typography>

          {/* {sales.public.startDateTime}
      {dates.start.dateTime}
      {promoter.name} */}
          <Typography variant="h5">
            Info<span className={classes.span}>:{info}</span>
          </Typography>
          <Typography variant="h5">
            Note<span className={classes.span}>:{pleaseNote}</span>
          </Typography>
          {/* {venues.country.name} */}
        </CardContent>
      </Card>
      <Box className={classes.box}>
        {flag ? (
          images.map((img, ind) => (
            <>
              <Card key={ind}>
                <CardMedia>
                  <img className={classes.img1} src={img.url} />
                </CardMedia>
              </Card>
            </>
          ))
        ) : (
          <>
            <Card>
              <CardMedia>
                <img className={classes.img1} src={images[0].url} />
              </CardMedia>
            </Card>
            <Card>
              <CardMedia>
                <img className={classes.img1} src={images[1].url} />
              </CardMedia>
            </Card>
            <Card>
              <CardMedia>
                <img className={classes.img1} src={images[2].url} />
              </CardMedia>
            </Card>
          </>
        )}
        <Button variant="contained" onClick={() => setFlag(!flag)}>
          {flag?"show less":"show more"}</Button>
      </Box>
    </div>
  );
}

export default Details;
