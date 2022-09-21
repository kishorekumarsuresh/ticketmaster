import { GoogleLogin } from "react-google-login";
import React from "react";

const clientId =
process.env.REACT_APP_GOOGLE_KEY;

function Login({ setAction }) {
  const onSuccess = (res) => {
    window.sessionStorage.setItem("authKey", res.accessToken);
    //localStorage.setItem("token", res.accessToken);
    setAction(false);
    console.log("Login Success!!!", res);
  };

  const onFailure = (res) => {
    console.log("Login Failed!", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
