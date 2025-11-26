import React, { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // simple boolean or user object (here we'll use user object or null)
  const [user, setUser] = useState(null);

  // simulating login: set a dummy user
  const login = (name = "User") => {
    setUser({ name });
  };

  const logout = () => {
    setUser(null);
  };

  // memoize value to avoid unnecessary re-renders
  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated: !!user }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// custom hook for consuming auth context
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
