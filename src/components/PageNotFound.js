import { Button, Typography } from "@mui/material";
import React, { Component } from "react";
import BlockIcon from "@mui/icons-material/Block";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Typography variant="h3">
          <BlockIcon />
          404!
        </Typography>
        <h4>Page Not Found...</h4>
        <Link to="/">
          <Button variant="contained" color="success">
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }
}

export default PageNotFound;
