import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Logout.css'

const LogoutButton = () => {
  const { logout, isAuthenticated} = useAuth0();

  return ( isAuthenticated &&
    <button className='logout_btn'
main
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
