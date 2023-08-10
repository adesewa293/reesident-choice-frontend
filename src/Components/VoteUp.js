import React from "react";

const VoteUp = ({ count, onVote }) => {
  return (
    <div>
      <button className="menuButton" onClick={() => onVote("up")}>Vote Up</button>
    </div>
  );
};

export default VoteUp;
