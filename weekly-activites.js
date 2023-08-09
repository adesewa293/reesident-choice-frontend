import React from 'react';
import ReactDOM from 'react-dom';
import WeekActivities from './WeekActivities'; // HELP NEEDED TO Adjust the import path -------------------------

function WeekActivities() {
    //PLEASE HELP ME IMPLETEMENT MY WEEKACTIVTIES COMPONENT -------------------------------------------------------
}
const WeeklyActivities = [
  ["Yoga Class", "Cooking Class", "Sewing Club"],       // Sunday activities
  ["Art and Crafts", "Baking Class", "Painting Class"], //Monday activites
  ["Gardening", "Singing Club", "Dancing Class"],       // Tuesday activities
  ["Movie time", "Scrapbooking", "Boardgames night"], // Wednsday activities
  ["Memory Game", "Journaling", "Quiz night"], // Thurday activites
  ["Music Therapy", "Card making", "Reading aloud"], //Friday activiites
  ["Bingo", "Walking Club", "Retro Theme Party"], // Saturday activities 
];

const App = () => {
  return (
    <div>
      <h1>Weekly Activities</h1>
      <WeekActivities activities={WeeklyActivities} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
