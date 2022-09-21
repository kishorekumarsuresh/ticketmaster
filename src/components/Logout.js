import { GoogleLogout } from "react-google-login";
import React from "react";
import { useNavigate } from "react-router-dom";

const clientId =
process.env.REACT_APP_GOOGLE_KEY;

function Logout({ setAction }) {
  const navig = useNavigate();
  const onSuccess = () => {
    window.sessionStorage.removeItem("authKey");
    //localStorage.removeItem("token");
    setAction(true);
    navig("/");
    console.log("Log out Successfull");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
