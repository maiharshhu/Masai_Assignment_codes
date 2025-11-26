import React from "react";
import { useAuth } from "../Providers/AuthProvider";

export default function Main() {
  const { user, isAuthenticated } = useAuth();

  return (
    <section style={{ padding: 20 }}>
      {isAuthenticated ? (
        <>
          <h2>Welcome back!</h2>
          <p>
            You are logged in as <strong>{user.name}</strong>.
          </p>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <p>You must log in to see personalized content.</p>
        </>
      )}
    </section>
  );
}
