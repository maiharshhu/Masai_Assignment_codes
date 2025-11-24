import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setbackgroundColor] = useState("green");

  const toggleColor = () => {
    setbackgroundColor((prev) => (prev === "green" ? "Yellow" : "green"));
  };

  return (
    <div style={{ backgroundColor, minHeight: "100vh" }}>
      <button onClick={toggleColor}>click on me</button>
    </div>
  );
}

export default App;
