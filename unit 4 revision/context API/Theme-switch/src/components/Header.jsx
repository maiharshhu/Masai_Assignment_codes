import { useTheme } from "../Providers/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
      }}
    >
      <h1 style={{ margin: 0 }}>Theme Demo</h1>
      <div>
        <button
          onClick={toggleTheme}
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
      </div>
    </header>
  );
}
