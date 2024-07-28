import "./components/productList/productList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/productList/productList";

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
