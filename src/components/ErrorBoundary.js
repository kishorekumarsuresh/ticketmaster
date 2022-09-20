import { Typography } from "@mui/material";
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError(error) {
    return { error: true };
  }
  render() {
    if (this.state.error) {
      return <Typography variant="h4">Something went wrong!!</Typography>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
