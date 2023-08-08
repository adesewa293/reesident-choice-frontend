import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Logout.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button nameClass='logout_btn'
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
