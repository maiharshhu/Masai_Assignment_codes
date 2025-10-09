const { useState, useEffect } = React;

function FakeStoreProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        alert("Error fetching data: " + error.message);
      });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 500, margin: "2rem auto" }}>
      <h2>FakeStore Products</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.title}</strong> <br />
              ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FakeStoreProducts />);
