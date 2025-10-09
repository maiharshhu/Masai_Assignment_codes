const { useState, useEffect } = React;

// persist theme in localStorage
function persistTheme(theme) {
  try {
    localStorage.setItem('memeTheme', theme);
  } catch (e) {}
}

// to restore theme from localStorage
function getPersistedTheme() {
  try {
    return localStorage.getItem('memeTheme') || 'light';
  } catch (e) {
    return 'light';
  }
}

function MemeExplorer() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterLarge, setFilterLarge] = useState(false);
  const [theme, setTheme] = useState(getPersistedTheme());

  // Fmemes only on button click
  const loadMemes = () => {
    setLoading(true);
    setError("");
    axios.get("https://api.imgflip.com/get_memes")
      .then(res => {
        setMemes(res.data.data.memes || []);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch memes.");
        setMemes([]);
        setLoading(false);
      });
  };

  //Theme toggling,
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    persistTheme(newTheme);
  };

  // Reset (clears filters, sorts, search)
  const resetAll = () => {
    setSearch("");
    setSortBy("name");
    setFilterLarge(false);
  };

  // Responsive filtered ,sorted memes
  let displayedMemes = memes
    .filter(meme => {
      if (search)
        return meme.name.toLowerCase().includes(search.toLowerCase());
      return true;
    })
    .filter(meme => {
      if (filterLarge)
        return meme.width > 500 || meme.height > 500;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "width") return b.width - a.width;
      return a.name.localeCompare(b.name);
    });

  const noMemes = !loading && !error && memes.length > 0 && displayedMemes.length === 0;

  return (
    <div className={theme === "dark" ? "dark-theme" : ""} style={{
      fontFamily: "sans-serif",
      background: theme === "dark" ? "#222" : "#fff",
      color: theme === "dark" ? "#eee" : "#222",
      minHeight: "100vh"
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "2rem auto",
        padding: "1rem",
        borderRadius: 12,
        background: theme === "dark" ? "#313131" : "#fafafa",
        boxShadow: "0 2px 10px #ddd"
      }}>
        <h2 style={{ display: "inline-block", marginRight: "2rem" }}>Meme Explorer</h2>
        <button onClick={toggleTheme} style={{ marginRight: "8px" }}>
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
        <button onClick={resetAll} style={{ marginRight: "8px" }}>Reset Filters</button>
        <button onClick={loadMemes}>Load Memes</button>

        {loading && <div style={{ margin: "2rem", fontSize: "1rem" }}>Loading memes...</div>}
        {error && <div style={{ margin: "2rem", color: "#e74c3c" }}>{error}</div>}

        <div style={{ display: "flex", alignItems: "center", margin: "1.5rem 0" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search memes..."
            style={{ marginRight: "14px", padding: "4px 8px", minWidth: "180px" }}
          />
          <label style={{ marginRight: "10px" }}>Sort by:</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ marginRight: "18px" }}>
            <option value="name">Name (A-Z)</option>
            <option value="width">Width (Descending)</option>
          </select>
          <label>
            <input
              type="checkbox"
              checked={filterLarge}
              onChange={e => setFilterLarge(e.target.checked)}
              style={{ marginRight: "4px" }}
            />
            Large memes (width > 500 or height > 500)
          </label>
        </div>

        {noMemes && <div style={{ margin: "2rem", color: "#888" }}>No memes found.</div>}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "16px"
        }}>
          {displayedMemes.map(meme => (
            <div
              key={meme.id}
              style={{
                border: "1px solid #ececec",
                borderRadius: "8px",
                padding: "12px",
                background: theme === "dark" ? "#292929" : "#fff",
                boxShadow: theme === "dark"
                  ? "0 4px 12px #333"
                  : "0 2px 8px #eee",
                textAlign: "center"
              }}
            >
              <img
                src={meme.url}
                alt={meme.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "130px",
                  objectFit: "contain",
                  marginBottom: "8px",
                  borderRadius: "4px"
                }}
              />
              <div style={{ fontWeight: "bold", fontSize: "1.08rem", marginBottom: "3px" }}>
                {meme.name}
              </div>
              <div style={{ color: "#888", fontSize: "0.95rem" }}>
                {meme.width} x {meme.height}
              </div>
            </div>
          ))}
        </div>
      </div>
      {}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MemeExplorer />);
