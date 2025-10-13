import React, { useState } from 'react';

function Counter({ initialValue }) {
  // Initialize state with initialValue from props
  const [count, setCount] = useState(initialValue);

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function (should never go below 0)
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;


