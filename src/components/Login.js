import { GoogleLogin } from "react-google-login";
import React from "react";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";

const clientId =
process.env.REACT_APP_GOOGLE_KEY;

const useStyles = makeStyles((theme) =>({
  login :{
    backgroundColor:'blue !important',color:'white !important ',height:'50px !important',fontFamily:'sans-serif'
  }
}))

function Login({ setAction }) {
  const classes = useStyles()
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
        // render= {renderProps => (
        //   <button onClick={renderProps.onClick} style={classes.logo} >Login with Google</button>
        // )}
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
