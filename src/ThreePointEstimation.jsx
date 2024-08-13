import React, { useState } from 'react';

function ThreePointEstimation() {
  const [optimisticEstimate, setOptimisticEstimate] = useState(0);
  const [mostLikelyEstimate, setMostLikelyEstimate] = useState(0);
  const [pessimisticEstimate, setPessimisticEstimate] = useState(0);
  const [expectedValue, setExpectedValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const calculateExpectedValue = () => {
    const parsedOptimistic = parseFloat(optimisticEstimate);
    const parsedMostLikely = parseFloat(mostLikelyEstimate);
    const parsedPessimistic = parseFloat(pessimisticEstimate);

    if (isNaN(parsedOptimistic) || isNaN(parsedMostLikely) || isNaN(parsedPessimistic)) {
      setErrorMessage('Please enter valid numbers.');
      return;
    }

    const e = (parsedOptimistic + (4 * parsedMostLikely) + parsedPessimistic) / 6;
    setExpectedValue(e);
    setErrorMessage('');
  };

  return (
    <div>
    <label const htmlFor="optimisticEstimate">Optimistic:</label>
      <input
        type="number"
        id="optimisticEstimate"
        value={optimisticEstimate}
        onChange={(e) => setOptimisticEstimate(parseFloat(e.target.value))}/>
      <label htmlFor="mostLikelyEstimate">Most Likely:</label>
      <input
        type="number"
        id="mostLikelyEstimate"
        value={mostLikelyEstimate}
        onChange={(e) => setMostLikelyEstimate(parseFloat(e.target.value))}/>
      <label htmlFor="pessimisticEstimate">Pessimistic:</label>
      <input
        type="number"
        id="pessimisticEstimate"
        value={pessimisticEstimate}
        onChange={(e) => setPessimisticEstimate(parseFloat(e.target.value))}/>
      <button onClick={calculateExpectedValue}>Calculate</button>
      <p>Expected Value: {expectedValue}</p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ThreePointEstimation;
