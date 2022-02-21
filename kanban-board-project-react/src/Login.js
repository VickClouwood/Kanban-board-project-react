import React from "react";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
    navigate("/Kanban");
  };
  return (
    <>
      <header className="App-header">
        <h1 className="heading">Tasks Desktop</h1>
        <h3 className="sub-heading">Please login to continue</h3>
        <div>
          <GoogleLogin
            clientId="205931497402-7iejiej6crf5ch2p1ita1hv819t7nb44.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </header>
    </>
  );
}

export default Login;
