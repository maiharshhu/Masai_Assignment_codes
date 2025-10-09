const { useState } = React;

function TodoListApp() {
  // Initialize state with sample tasks
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [input, setInput] = useState("");

  // Add a new task, validating empty input
  const addTask = () => {
    if (input.trim() === "") return; // Avoid empty tasks
    setTasks(prev => [...prev, input.trim()]);
    setInput("");
  };

  // Clear all tasks
  const clearAll = () => setTasks([]);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 400, margin: "2rem auto" }}>
      <h2>Basic Todo List</h2>
      <div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add new task..."
          style={{ marginRight: "8px" }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div style={{ marginTop: "12px" }}>
        <button onClick={clearAll}>Clear All</button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ marginTop: "1rem", color: "#999" }}>No tasks available.</p>
      ) : (
        <ul style={{ marginTop: "1rem" }}>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TodoListApp />);
