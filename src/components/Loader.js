import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  div1: {
    marginTop: "120px",
  },
});

function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.div1}>
      <center>
        <CircularProgress color="secondary" />
        <Typography variant="h4"> Loading...</Typography>
      </center>
    </div>
  );
}

export default Loader;
