import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

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
      <table>
        <tbody>
          <Statistic text="Good" value={good}></Statistic>
          <Statistic text="Neutral" value={neutral}></Statistic>
          <Statistic text="Bad" value={bad}></Statistic>
          <Statistic text="All" value={getTotal()}></Statistic>
          <Statistic text="Average" value={getAverage()}></Statistic>
          <Statistic text="Positive" value={getPositive()}></Statistic>
        </tbody>
      </table>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
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
        <Button handleClick={handleGood} text="Good"></Button>
        <Button handleClick={handleNeutral} text="Neutral"></Button>
        <Button handleClick={handleBad} text="Bad"></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
