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

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array.from(anecdotes, () => 0));

  const mostVoted = votes.reduce((mostVoted, vote, index) =>
    votes[mostVoted] < vote ? index : mostVoted,
  );

  const handleClickNext = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const handleClickVote = () =>
    setVotes(
      votes.map((vote, index) => (index === selected ? vote + 1 : vote)),
    );

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button text="vote" handleClick={handleClickVote} />
      <Button text="next anecdote" handleClick={handleClickNext} />
      <Header text="Anecdote with most votes" />
      <Anecdote text={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </div>
  );
};

const Anecdote = ({ text, votes }) => (
  <p>
    {text}
    <br />
    has {votes} votes
  </p>
);

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

export default App;
