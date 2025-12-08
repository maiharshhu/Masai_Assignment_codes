import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { LogOut } from "lucide-react";

export default function StudentDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    studyHours: 0,
    sleep: 0,
    stress: 5,
    reflection: "",
  });
  const [history, setHistory] = useState([]);

  // 1. Fetch data ONLY when the component loads or user changes
  useEffect(() => {
    if (!user) return;

    const getData = async () => {
      try {
        const q = query(
          collection(db, "logs"),
          where("uid", "==", user.uid),
          orderBy("date", "asc")
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setHistory(data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    getData();
  }, [user]);

  // 2. Handle the Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    // Create the new log object
    const newLog = {
      ...stats,
      uid: user.uid,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      // Save to Firebase
      await addDoc(collection(db, "logs"), newLog);

      // Update the chart IMMEDIATELY (No need to re-fetch)
      setHistory((prev) => [...prev, newLog]);

      alert("Log saved!");
      // Optional: Reset form fields here if you want
    } catch (error) {
      console.error("Error saving log: ", error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student Dashboard 🎓</h1>
        <button
          onClick={() => auth.signOut()}
          className="flex items-center gap-2 text-red-600"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow border"
        >
          <h2 className="text-xl font-bold mb-4">Log Daily Activity</h2>
          <div className="space-y-4">
            <div>
              <label>Study Hours</label>
              <input
                type="number"
                className="border w-full p-2 rounded"
                onChange={(e) =>
                  setStats({ ...stats, studyHours: Number(e.target.value) })
                }
                required
              />
            </div>
            <div>
              <label>Sleep (Hours)</label>
              <input
                type="number"
                className="border w-full p-2 rounded"
                onChange={(e) =>
                  setStats({ ...stats, sleep: Number(e.target.value) })
                }
                required
              />
            </div>
            <div>
              <label>Stress (1-10)</label>
              <input
                type="range"
                min="1"
                max="10"
                className="w-full"
                onChange={(e) =>
                  setStats({ ...stats, stress: Number(e.target.value) })
                }
              />
              <p className="text-right">{stats.stress}/10</p>
            </div>
            <textarea
              placeholder="Reflection..."
              className="border w-full p-2 rounded"
              onChange={(e) =>
                setStats({ ...stats, reflection: e.target.value })
              }
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
              Log Day
            </button>
          </div>
        </form>

        {/* Chart */}
        <div className="bg-white p-6 rounded shadow border h-96">
          <h2 className="text-xl font-bold mb-4">Progress</h2>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={history}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="studyHours"
                stroke="#8884d8"
                name="Study"
              />
              <Line
                type="monotone"
                dataKey="stress"
                stroke="#ff7300"
                name="Stress"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
