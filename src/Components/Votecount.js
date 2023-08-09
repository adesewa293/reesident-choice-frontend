import React, { useState } from "react";
import VoteUp from "./VoteUp";
import VoteDown from "./VoteDown";

const VoteComponent = () => {
  const [voteCount, setVoteCount] = useState(0);

  const handleVote = (action) => {
    if (action === "up") {
      setVoteCount(voteCount + 1);
    } else if (action === "down") {
      setVoteCount(voteCount - 1);
    }
  };

  return (
    <div>
      <h1>Vote Component</h1>
      <VoteUp count={voteCount} onVote={handleVote} />
      <VoteDown count={voteCount} onVote={handleVote} />
    </div>
  );
};

export default VoteComponent;
