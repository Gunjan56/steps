import React, { useState } from "react";
function DataCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  let date = new Date();
  date.setDate(date.getDate() + count);
  function stepDecrement() {
    if (step > 1) {
      setStep((c) => c - 1);
    }
  }
  function countDecrement() {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  }
  return (
    <div>
      <div>
        <button onClick={stepDecrement}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={countDecrement}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
export default DataCounter;
