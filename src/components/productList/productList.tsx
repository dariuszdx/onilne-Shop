import React from "react";
import { Product } from "../../models/Product";

const ProductList: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      type: "XD",
      model: "ASUS",
      price: 154.99,
      status: "?",
    },
    {
      id: 2,
      name: "TV",
      type: "XC055",
      model: "SONY",
      price: 80.1,
      status: "?",
    },
    {
      id: 3,
      name: "Soundbar",
      type: "Marshall",
      model: "100",
      price: 115,
      status: "?",
    },
    {
      id: 4,
      name: "Printer",
      type: "QWERTY",
      model: "Canon",
      price: 55.77,
      status: "?",
    },
  ];
  return (
    <div>
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Model</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.model}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
