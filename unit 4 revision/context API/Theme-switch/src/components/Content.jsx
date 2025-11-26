import React from "react";
import { useTheme } from "../Providers/ThemeProvider";

export default function Content() {
  const { theme } = useTheme();

  return (
    <section style={{ display: "grid", gap: 16 }}>
      <div className="card">
        <h2>Card One</h2>
        <p>
          The current theme is <strong>{theme}</strong>.
        </p>
      </div>

      <div className="card">
        <h2>Card Two</h2>
        <p>
          This nested component also reads the theme from context and will
          update automatically.
        </p>
      </div>
    </section>
  );
}
