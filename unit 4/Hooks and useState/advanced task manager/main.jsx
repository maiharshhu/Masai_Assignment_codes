const { useState } = React;

// Priority levels sorted from High to Low
const PRIORITY_ORDER = { High: 3, Medium: 2, Low: 1 };
const PRIORITIES = ["High", "Medium", "Low"];
const COMPLETION_FILTERS = ["All", "Completed", "Incomplete"];

function TaskManager() {
  // State for tasks, input fields, and filters
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [completionFilter, setCompletionFilter] = useState("All");

  // Add a new task
  const addTask = () => {
    if (title.trim() === "") return;
    setTasks(prev => sortTasks([
      ...prev,
      {
        id: Date.now() + Math.random(),
        title: title.trim(),
        priority,
        completed: false
      }
    ]));
    setTitle("");
    setPriority("High");
  };

  // Sort tasks by priority (High > Medium > Low)
  function sortTasks(tasksList) {
    return [...tasksList].sort((a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]);
  }

  // Toggle task completion
  const toggleComplete = idx => {
    setTasks(prev =>
      sortTasks(
        prev.map((task, i) => i === idx ? { ...task, completed: !task.completed } : task)
      )
    );
  };

  // Delete a task
  const deleteTask = idx => {
    setTasks(prev => sortTasks(prev.filter((_, i) => i !== idx)));
  };

  // Filter tasks by priority and completion status
  const filteredTasks = tasks.filter(task => {
    const passesPriority = priorityFilter === "All" || task.priority === priorityFilter;
    const passesCompletion =
      completionFilter === "All"
        ? true
        : completionFilter === "Completed"
        ? task.completed
        : !task.completed;
    return passesPriority && passesCompletion;
  });

  // Highlight if high priority
  function getTaskStyle(task) {
    return {
      fontWeight: task.priority === "High" ? "bold" : "normal",
      color: task.priority === "High" ? "#c0392b" : undefined,
      textDecoration: task.completed ? "line-through" : "none",
      background: task.priority === "High" ? "#ffebee" : "transparent",
      margin: "4px 0",
      padding: "2px 8px",
      borderRadius: "4px"
    };
  }

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Advanced Task Manager</h2>
      <div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title..."
          style={{ marginRight: "8px" }}
        />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          {PRIORITIES.map(p => (
            <option value={p} key={p}>{p}</option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div style={{ margin: "12px 0" }}>
        <label>Priority Filter:</label>
        <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
          <option value="All">All</option>
          {PRIORITIES.map(p => (
            <option value={p} key={p}>{p}</option>
          ))}
        </select>
        <label style={{ marginLeft: "8px" }}>Completion Filter:</label>
        <select value={completionFilter} onChange={e => setCompletionFilter(e.target.value)}>
          {COMPLETION_FILTERS.map(c => (
            <option value={c} key={c}>{c}</option>
          ))}
        </select>
      </div>
      <ul>
        {filteredTasks.map((task, idx) => (
          <li key={task.id} style={getTaskStyle(task)}>
            <span
              onClick={() => toggleComplete(tasks.indexOf(task))}
              style={{ cursor: "pointer", marginRight: "12px" }}
              title="Toggle completion"
            >
              [{task.completed ? "✓" : "○"}]
            </span>
            {task.title} <span style={{
              fontWeight: "bold",
              marginLeft: "8px"
            }}>({task.priority})</span>
            <button
              onClick={() => deleteTask(tasks.indexOf(task))}
              style={{
                marginLeft: "16px",
                color: "#fff",
                background: "#e74c3c",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer"
              }}
            >Delete</button>
          </li>
        ))}
      </ul>
      {filteredTasks.length === 0 && (
        <div style={{ color: "#888", marginTop: "0.5rem" }}>
          No tasks to display.
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TaskManager />);
