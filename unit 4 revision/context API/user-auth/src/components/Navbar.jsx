import React from "react";
import { useAuth } from "../Providers/AuthProvider";

export default function Navbar() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <nav className="nav">
      <div className="nav-left">
        <strong>MyAuthApp</strong>
      </div>

      <div className="nav-right">
        <span style={{ marginRight: 12 }}>
          {isAuthenticated ? `Hello, ${user.name}` : "Not signed in"}
        </span>

        {isAuthenticated ? (
          <button onClick={logout} className="btn">
            Logout
          </button>
        ) : (
          <button onClick={() => login("Alice")} className="btn">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
