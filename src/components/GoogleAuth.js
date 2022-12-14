import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { gapi } from "gapi-script";
import { Box } from "@mui/material";


const clientId =process.env.REACT_APP_GOOGLE_KEY;


function GoogleAuth() {
  const [action, setAction] = useState(true);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });
  return (
    <Box>
      {action ? (
        <Login setAction={setAction} />
      ) : (
        <Logout setAction={setAction} />
      )}
    </Box>
  );
}

export default GoogleAuth;
