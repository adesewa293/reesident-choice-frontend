import React from "react";

const VoteUp = ({ count, onVote }) => {
  return (
    <div>
      <button onClick={() => onVote("up")}>Vote Up</button>
    </div>
  );
};

export default VoteUp;
