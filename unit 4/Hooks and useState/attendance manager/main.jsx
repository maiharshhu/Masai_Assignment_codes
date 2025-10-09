const { useState } = React;

function AttendanceManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Amit", present: true },
    { id: 2, name: "Sara", present: false },
    { id: 3, name: "Priya", present: true },
    { id: 4, name: "John", present: false },
    { id: 5, name: "Neha", present: true }
  ]);
  const [filter, setFilter] = useState("All"); // "All", "Present", "Absent"

  const toggleAttendance = (id) => {
    setStudents(students =>
      students.map(s =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  const filteredStudents = students.filter(s =>
    filter === "All"
    ? true
    : filter === "Present"
      ? s.present
      : !s.present
  );
  const presentCount = students.filter(s => s.present).length;

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 400, margin: "2rem auto" }}>
      <h2>Attendance Manager</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ marginRight: "8px" }}>Filter:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td style={{
                fontWeight: "bold",
                color: s.present ? "#2ecc40" : "#e74c3c"
              }}>
                {s.present ? "Present" : "Absent"}
              </td>
              <td>
                <button onClick={() => toggleAttendance(s.id)}>Toggle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "1rem" }}>
        Total Present: <strong>{presentCount}</strong>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AttendanceManager />);
