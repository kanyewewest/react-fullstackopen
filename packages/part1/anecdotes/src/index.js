import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({ anecdote, points }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>Has {points} votes</p>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  function randomBetween(lower, upper) {
    return Math.floor(Math.random() * (upper + 1) + lower);
  }

  function handleNextAnecdote() {
    const random = randomBetween(0, anecdotes.length - 1);
    return setSelected(
      random !== selected ? random : (random + 1) % (anecdotes.length - 1),
    );
  }

  function handleVote() {
    const pointsCopy = [...points];
    ++pointsCopy[selected];
    return setPoints(pointsCopy);
  }

  function getMostVotedAnecdoteIndex() {
    // not efficient at all lmao
    const max = Math.max(...points);
    return points.findIndex((x) => x === max);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote
        anecdote={anecdotes[selected]}
        points={points[selected]}
      ></Anecdote>
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNextAnecdote}>Next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <Anecdote
        anecdote={anecdotes[getMostVotedAnecdoteIndex()]}
        points={points[getMostVotedAnecdoteIndex()]}
      ></Anecdote>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
