import { useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegistering) {
        // 1. Create User in Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // 2. Save Role to Database
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          role: role,
          createdAt: new Date(),
        });

        // 3. Redirect based on role
        navigate(role === "student" ? "/student" : "/mentor");
      } else {
        // Login Logic
        await signInWithEmailAndPassword(auth, email, password);
        // Navigation happens automatically via ProtectedRoute (setup next) or manual redirect:
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">MindTrack</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Only show Role selection if Registering */}
          {isRegistering && (
            <select
              className="border p-2 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="mentor">Academic Mentor</option>
            </select>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isRegistering ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isRegistering ? "Already have an account?" : "No account?"}
          <span
            className="text-blue-600 cursor-pointer ml-1 font-bold"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
