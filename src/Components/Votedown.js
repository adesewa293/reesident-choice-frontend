import React from "react";

const VoteDown = ({ count, onVote }) => {
  return (
    <div>
      <button onClick={() => onVote("down")}>Vote Down</button>
      <span>{count}</span>
    </div>
  );
};

export default VoteDown;