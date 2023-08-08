import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Login.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button nameClass='login_btn' onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
