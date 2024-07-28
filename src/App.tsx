import "./components/productList/productList.css";
import ProductList from "../src/components/productList/productList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Online Shop</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
