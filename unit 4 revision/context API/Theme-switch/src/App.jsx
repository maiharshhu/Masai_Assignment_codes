import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { useTheme } from "./Providers/ThemeProvider";

export default function App() {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === "light" ? "theme-light app-root" : "theme-dark app-root"
      }
    >
      <Header />
      <main style={{ padding: 20 }}>
        <Content />
      </main>
    </div>
  );
}
