import React, { useState } from 'react';

function PertEstimation() {
  const [optimistic, setOptimistic] = useState(0);
  const [mostLikely, setMostLikely] = useState(0);
  const [pessimistic, setPessimistic] = useState(0);
  const [expectedValue, setExpectedValue] = useState(0);

  const calculateExpectedValue = () => {
    const expected = (optimistic + (4 * mostLikely) + pessimistic) / 6;
    setExpectedValue(expected);
  };

  return (
    <div>
      <label>Optimistic:</label>
      <input type="number" value={optimistic} onChange={(e) => setOptimistic(Number(e.target.value))} />
      <label>Most Likely:</label>
      <input type="number" value={mostLikely} onChange={(e) => setMostLikely(Number(e.target.value))} />
      <label>Pessimistic:</label>
      <input type="number" value={pessimistic} onChange={(e) => setPessimistic(Number(e.target.value))} />
      <button onClick={calculateExpectedValue}>Calculate</button>
      <p>Expected Value: {expectedValue}</p>
    </div>
  );
}

export default PertEstimation;
