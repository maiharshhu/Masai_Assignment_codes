import React from "react";
import { useAuth } from "../Providers/AuthProvider";

export default function Footer() {
  const { isAuthenticated } = useAuth();

  return (
    <footer className="footer">
      {isAuthenticated ? (
        <span>Welcome, User</span>
      ) : (
        <span>Please log in</span>
      )}
    </footer>
  );
}
