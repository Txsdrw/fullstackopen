import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const scoreSum = good + neutral + bad
  const avg = (good - bad)/ scoreSum

  const handleAddGood = () => {
    setGood(good + 1)
  }

  const handleAddNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleAddBad = () => {
    setBad(bad + 1)
  }


  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleAddGood}>good</button>
        <button onClick={handleAddNeutral}>neutral</button>
        <button onClick={handleAddBad}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {scoreSum}</p>
        <p>average {!avg ? 0 : avg}</p>
        <p>positive {100 * good / scoreSum} %</p>
      </div>
    </>
  );
};

export default App;
