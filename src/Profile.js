import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      let greetingText = "";
      if (currentHour >= 5 && currentHour < 12) {
        greetingText = "Good morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = "Good afternoon";
      } else {
        greetingText = "Good evening";
      }

      setGreeting(greetingText);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <p>
          {greeting}, {user.given_name}!
        </p>
      </div>
    )
  );
};

export default Profile;
