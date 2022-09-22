import { Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "./redux/ticketAction";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { getDetails } from "./redux/ticketAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Backdrop from "@mui/material/Backdrop";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  div1: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "0 px",
    justifyContent: "space-around",
  },
  card: {
    display: "grid",
    flexWrap: "nowrap",
    flexDirection: "row",
    height: "390px",
    width: "270px",
    marginTop: "15px",
    boxShadow: "0.5px 0.5px 0.5px 0.5px black",
    cursor: "pointer",
    //marginLeft:'-10 px'
  },
  cardmedia: {
    "&:hover": { transform: "scale3d(1.07, 1.07, 1)" },
  },
  img1: {
    height: "170px",
    width: "270px",
    alt: "picture",
  },
  cardcontent: {
    display: "flex",
    alignItems: "center",
  },
  timeDate: {
    fontSize: "16px",
    marginBottom: "8px",
    color: "rgb(145, 78, 187)",
    fontWeight: "600px",
    textTransform: "uppercase",
    fontFamily: '"Averta", Helvetica, Arial, sans-serif',
  },
  address: {
    color: "rgb(38, 38, 38)",
    display: "webkit-box",
    fontSize: "14px",
    lineHeight: "1.29px",
    opacity: "0.65px",
    fontFamily: ' "Averta", Helvetica, Arial, sans-serif',
  },
  evename: {
    fontSize: "20px",
    marginBottom: "8px",
    color: "rgb(38, 38, 38)",
    fontWeight: "600px",
    fontFamily: '"Averta", Helvetica, Arial, sans-serif',
  },
  info: {
    display: "grid",
    justifyContent: "flex-start",
    alignContent: "flex-start !important",
  },
  details: {
    padding: "120px",
  },
  link: {
    textDecoration: "none",
  },
}));

function Display({ load, setLoad }) {
  const classes = useStyles();
  const events = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  const [snack, setSnack] = useState(true);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const handleBackdrop = () => {
    alert('Login to see')
    return (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={snack}
          onClick={() => setSnack(false)}
        >
          You must login to access the event !!!
        </Backdrop>
    );
  };

  const handleDetails = (id) => {
    setLoad(true);
    setTimeout(() => setLoad(false), 1000);
    dispatch(getDetails(id));
  };

  return (
    <div>
      <div className={classes.div1}>
        {events.events[0] ? (
          events.events.map((elem, index) => (
            <>
              <h3 key={index}>
                <Link
                  className={classes.link}
                  to={
                    window.sessionStorage.getItem("authKey")
                      ? `details/${elem.id}`
                      : null
                  }
                >
                  <Card
                    className={classes.card}
                    onClick={() =>
                      window.sessionStorage.getItem("authKey")
                        ? handleDetails(elem.id)
                        : handleBackdrop()
                    }
                  >
                    <CardMedia className={classes.cardmedia}>
                      <img className={classes.img1} src={elem.images[2].url} />
                    </CardMedia>

                    <CardContent className={classes.details}>
                      <div className={classes.info}>
                        <p className={classes.evename}>{elem.name}</p>
                        <div
                          style={{
                            display: "grid",
                            justifyContent: "center",
                            alignItems: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "flex-start",
                            }}
                          >
                            <LocationOnIcon />
                            <p className={classes.address}>
                              {elem._embedded.venues[0].address.line1}
                            </p>
                          </div>
                          <p className={classes.address}>
                            {elem._embedded.venues[0].city.name}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </h3>
            </>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <img
              src="/image/results.png"
              height="300px"
              width="400px"
              alt="pict"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Display;
