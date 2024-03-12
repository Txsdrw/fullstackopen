import { useState } from "react";

const Button = ({name, handleClick}) => {
    return (
      <button onClick={handleClick}>{name}</button>
    )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const scoreSum = good + neutral + bad;
  const avg = (good - bad) / scoreSum;
  const positive = (100 * good) / scoreSum;

  if (scoreSum === 0) return <p>No feedback given</p>;
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={scoreSum}/>
      <StatisticLine text='average' value={!avg ? 0 : avg}/>
      <StatisticLine text='positive' value={!positive ? 0 : positive + " %"}/>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAddGood = () => {
    setGood(good + 1);
  };

  const handleAddNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleAddBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleAddGood} name='good' />
        <Button handleClick={handleAddNeutral} name='neutral' />
        <Button handleClick={handleAddBad} name='bad' />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default App;
