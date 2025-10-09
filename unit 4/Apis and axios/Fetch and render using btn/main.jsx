const { useState } = React;

function ProductCardsApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // fetch products
  const loadProducts = () => {
    setLoading(true);
    setError("");
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch products.");
        setProducts([]);
        setLoading(false);
      });
  };

  // clear product cards
  const clearProducts = () => {
    setProducts([]);
    setError("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: "2rem auto" }}>
      <h2>FakeStore Product Cards</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={loadProducts}>Load Products</button>
        <button onClick={clearProducts} style={{ marginLeft: "6px" }}>
          Clear Products
        </button>
      </div>
      {loading ? (
        <div style={{ fontSize: "1.2rem", margin: "2rem 0" }}>
          <span>Loading...</span>
        </div>
      ) : error ? (
        <div style={{ color: "red", margin: "2rem 0" }}>{error}</div>
      ) : products.length === 0 ? (
        <div style={{ color: "#888", margin: "2rem 0" }}>No data available.</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px"
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ececec",
                borderRadius: "8px",
                padding: "16px",
                background: "#fafafa",
                boxShadow: "0 2px 12px #eee"
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  height: "120px",
                  width: "100%",
                  objectFit: "contain",
                  marginBottom: "12px"
                }}
              />
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                {product.title}
              </div>
              <div style={{ color: "#1877F2", fontSize: "1.15rem" }}>
                ${product.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProductCardsApp />);
