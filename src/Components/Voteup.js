import React from "react";

const VoteUp = ({ count, onVote }) => {
  return (
    <div>
      <button onClick={() => onVote("up")}>Vote Up</button>
      <span>{count}</span>
    </div>
  );
};

export default VoteUp;
