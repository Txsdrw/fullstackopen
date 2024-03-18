import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const votesArr = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votesArr);
  const highestVote = Math.max(...votes);
  const highestVoteIndex = votes.indexOf(highestVote);

  const handleGenerateRandomNumber = () => {
    while (true) {
      let randomNumber = Math.floor(Math.random() * anecdotes.length);
      if (randomNumber !== selected) return setSelected(randomNumber);
    }
  };

  const handleUpdateVote = () => {
    const updatedVote = votes.map((i, index) =>
      index != selected ? (i += 0) : (i += 1)
    );
    setVotes(updatedVote);
    console.log(votes);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleGenerateRandomNumber}>Generate next</button>
      <button onClick={handleUpdateVote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[highestVoteIndex]}</div>
    </>
  );
};

export default App;
