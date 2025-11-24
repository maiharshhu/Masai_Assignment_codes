import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false); // light / dark mode toggle

  // Expensive calculation function
  const slowFunction = (num) => {
    console.log("Running slow function...");

    // Heavy loop → artificial slow process
    for (let i = 0; i < 1000000000; i++) {}

    return num * 10;
  };

  // useMemo will remember the result
  const calculatedValue = useMemo(() => {
    return slowFunction(number);
  }, [number]); // Only runs when `number` changes

  const themeStyles = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px",
    marginTop: "20px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button
        onClick={() => setTheme((prev) => !prev)}
        style={{ marginLeft: "10px" }}
      >
        Toggle Theme
      </button>

      <div style={themeStyles}>
        <h3>Calculated Value: {calculatedValue}</h3>
      </div>
    </div>
  );
}

export default App;
