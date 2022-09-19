import { Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "./redux/ticketAction";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { getDetails } from "./redux/ticketAction";

const useStyles = makeStyles({
  div1:{
    display:'flex',
    flexWrap:'wrap',
    paddingLeft:'25px',
    justifyContent:'space-around'

  },
  card: {
    display:'grid',
    flexWrap:'nowrap',
    flexDirection:'row',
    height:'390px',
    width:"270px",
    marginTop:'15px',
    boxShadow :'0.5px 0.5px 0.5px 0.5px black',
    //"&:hover": { transform: "scale3d(.05, 1.05, 1)" },
  },
  cardmedia:{
    "&:hover": { transform: "scale3d(1.07, 1.07, 1)" },
  },
  img1:{
    height: '170px', width: '270px', alt: 'picture',
  },
  cardcontent:{
    display:'flex',
    alignItems:'center'
  },
  timeDate:{
    fontSize:'16px',
    marginBottom:'8px',
    color:'rgb(145, 78, 187)',
    fontWeight:'600px',
    textTransform:'uppercase',
    fontFamily:'"Averta", Helvetica, Arial, sans-serif'
  },
  address:{
    color:'rgb(38, 38, 38)',
    display:'webkit-box',
    fontSize: '14px',
    lineHeight:'1.29px',
    opacity: '0.65px',
    fontFamily:' "Averta", Helvetica, Arial, sans-serif'
  },
  evename:{
    fontSize:'20px',
    marginBottom:'8px',
    color:'rgb(38, 38, 38)',
    fontWeight:'600px',
    fontFamily: '"Averta", Helvetica, Arial, sans-serif'
  },
  info:{
    display:'grid',
    justifyContent:'flex-start',
    alignContent:'flex-start !important'
  }
})

function Display() {
  const classes = useStyles()
  const events = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  

  return (
    <div >
      <h2>Display Events</h2>
      <div className={classes.div1}>
      {events.events ? (
        events.events.map((elem, index) => (
          <><h3 key={index}>
          <Card className={classes.card}>
            <Link to={`details/${elem.id}`}>
            <CardMedia className={classes.cardmedia}
            onClick={() => dispatch(getDetails(elem.id))}>
              <img  className={classes.img1} src={elem.images[2].url} />
            </CardMedia>
            </Link>
            <CardContent className={classes.details}>
            <div className={classes.cardcontent}> 
            <p className={classes.timeDate}>{elem.dates.start.localDate}</p>@
            <p className={classes.timeDate}>{elem.dates.start.localTime}</p>
            </div>
            <div className={classes.info}>
            <p className={classes.evename}>{elem.name}</p>
            <p className={classes.address}>{elem._embedded.venues[0].address.line1}</p>
            <p className={classes.address}>{elem._embedded.venues[0].city.name}</p>
            </div>
            </CardContent>  
          </Card>
            </h3>
          </>
        ))
      ) : (
        <>
          <h3>No Data found</h3>
        </>
      )}

      </div>
          </div>
  );
}

export default Display;
