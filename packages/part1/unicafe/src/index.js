import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ good, neutral, bad }) => {
  function getTotal() {
    return good + neutral + bad;
  }
  function getAverage() {
    return (good - bad) / (getTotal() || 1);
  }
  function getPositive() {
    return (good / (getTotal() || 1)) * 100 + '%';
  }
  function getHeader() {
    return <h1>Statistics</h1>;
  }

  if (getTotal() === 0) {
    return (
      <>
        {getHeader()}
        <div>No feedback given</div>
      </>
    );
  }
  return (
    <>
      {getHeader()}
      <ul>
        <li>Good {good}</li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>All {getTotal()}</li>
        <li>Average {getAverage()}</li>
        <li>Positive {getPositive()}</li>
      </ul>
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGood() {
    setGood(good + 1);
  }
  function handleNeutral() {
    setNeutral(neutral + 1);
  }
  function handleBad() {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
