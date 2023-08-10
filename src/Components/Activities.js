import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Activities.css";
import Elvis from "../Images/elvis.png";
import Gardening from "../Images/gardening.jpeg";
import Knitting from "../Images/knitting club.jpg";
import LiveMusic from "../Images/livemusic.png";
import Arts from "../Images/Pressed-Flower-Craft-600x500.jpg";
import Boxing from "../Images/boxing_gloves.jpg";

const localImageFilenames = [
  Gardening,
  Knitting,
  Elvis,
  LiveMusic,
  Arts,
  Boxing,
];

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities();
  }, []);

  async function getActivities() {
    try {
      const today = new Date();
      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + 7);

      const API = "https://resident-choice-api.onrender.com/get-week-events";
      const params = {
        timeMin: today.toISOString(),
        timeMax: endOfWeek.toISOString(),
      };

      const result = await axios.get(API, { params });

      const events = result.data.items;

      const activitiesWithFormattedDates = events.map((event, index) => {
        const startDateTime = new Date(event.start.dateTime);
        const endDateTime = new Date(event.end.dateTime);

        const dayOfWeek = new Intl.DateTimeFormat("en-US", {
          weekday: "long",
        }).format(startDateTime);
        const startTime = startDateTime.toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "numeric",
        });
        const endTime = endDateTime.toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "numeric",
        });

        return {
          description: event.summary,
          summary: event.description,
          image: localImageFilenames[index % localImageFilenames.length],
          formattedDateTime: `${dayOfWeek} ${startTime}-${endTime}`,
        };
      });

      setActivities(activitiesWithFormattedDates);
    } catch (err) {
      console.error("Error getting week events:", err);
    }
  }

  return (
    <div className="activities-container">
      <h2 className="activities-title">This Week</h2>
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <div>
              <img
                className="activity-image"
                src={activity.image}
                alt={"activity"}
              />
            </div>
            <div>
              <h3>{activity.description}</h3>
              <p>{activity.summary}</p>
              <p>{activity.formattedDateTime}</p>
            </div>
            <Link to="/message" className="activity-button">
              RSVP
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
