import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Placeholder components (We will build these next!)
const StudentDashboard = () => (
  <h1 className="text-3xl p-10">Welcome Student! 🎓</h1>
);
const MentorDashboard = () => (
  <h1 className="text-3xl p-10">Welcome Mentor! 🍎</h1>
);

// Component to protect routes
const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (role !== allowedRole) return <Navigate to="/" />; // or some error page

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mentor"
          element={
            <ProtectedRoute allowedRole="mentor">
              <MentorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
