import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => setIsLoggedIn((prev) => !prev);

  const value = { isLoggedIn, toggleAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
