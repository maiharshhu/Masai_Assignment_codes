const { useState } = React;

function CounterApp() {
  const [count, setCount] = useState(0);

  // Increment by 1 (up to 10)
  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  // Decrement by 1, never below 0
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  // Reset to 0
  const reset = () => setCount(0);

  return (
    <div style={{
      fontFamily: "sans-serif",
      maxWidth: 300,
      margin: "2rem auto",
      textAlign: "center"
    }}>
      <h2>React Counter App</h2>
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Count: {count}
      </div>
      <div>
        <button onClick={increment} style={{ margin: "0 4px" }}>Increment</button>
        <button onClick={decrement} style={{ margin: "0 4px" }}>Decrement</button>
        <button onClick={reset} style={{ margin: "0 4px" }}>Reset</button>
      </div>
      {count === 10 && (
        <div style={{
          marginTop: "1rem",
          fontWeight: "bold",
          color: "#27ae60",
          fontSize: "1.2rem"
        }}>
          Goal Reached!
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CounterApp />);
