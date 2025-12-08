import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { LogOut, FileText } from "lucide-react";
import jsPDF from "jspdf";

export default function MentorDashboard() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [logs, setLogs] = useState([]);

  // Fetch all users who are students
  useEffect(() => {
    const fetchStudents = async () => {
      const q = query(collection(db, "users"), where("role", "==", "student"));
      const snap = await getDocs(q);
      setStudents(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchStudents();
  }, []);

  // Fetch logs when a student is clicked
  const handleStudentClick = async (student) => {
    setSelectedStudent(student);
    const q = query(collection(db, "logs"), where("uid", "==", student.id));
    const snap = await getDocs(q);
    setLogs(snap.docs.map((doc) => doc.data()));
  };

  const downloadReport = () => {
    const doc = new jsPDF();
    doc.text(`Report for ${selectedStudent.email}`, 10, 10);
    logs.forEach((log, index) => {
      doc.text(
        `${log.date}: Studied ${log.studyHours}h, Stress: ${log.stress}`,
        10,
        20 + index * 10
      );
    });
    doc.save("student_report.pdf");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800">
          Mentor Dashboard 🍎
        </h1>
        <button
          onClick={() => auth.signOut()}
          className="flex items-center gap-2 text-red-600"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Sidebar List of Students */}
        <div className="col-span-1 bg-white border rounded p-4 h-96 overflow-y-auto">
          <h2 className="font-bold mb-4">Students</h2>
          {students.map((student) => (
            <div
              key={student.id}
              onClick={() => handleStudentClick(student)}
              className={`p-3 cursor-pointer rounded mb-2 ${
                selectedStudent?.id === student.id
                  ? "bg-blue-100"
                  : "hover:bg-gray-50"
              }`}
            >
              <p className="text-sm font-medium">{student.email}</p>
            </div>
          ))}
        </div>

        {/* Main View for Selected Student */}
        <div className="col-span-2 bg-white border rounded p-6">
          {selectedStudent ? (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  Logs: {selectedStudent.email}
                </h2>
                <button
                  onClick={downloadReport}
                  className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1 rounded text-sm"
                >
                  <FileText size={14} /> Download PDF
                </button>
              </div>
              <div className="space-y-3">
                {logs.length === 0 ? (
                  <p>No logs found.</p>
                ) : (
                  logs.map((log, i) => (
                    <div
                      key={i}
                      className="border p-3 rounded bg-gray-50 text-sm"
                    >
                      <span className="font-bold">{log.date}</span>: Studied{" "}
                      {log.studyHours} hrs | Sleep {log.sleep} hrs | Stress{" "}
                      {log.stress}
                      <p className="text-gray-500 italic mt-1">
                        "{log.reflection}"
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-20">
              Select a student to view details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
