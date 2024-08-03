import React, { useState } from "react";
import { Product } from "../../models/Product";
import { handleSearchType } from "../searchProduct/searchProduct";
import productsData from "../productList/productData";
import { sortData } from "../sortProduct/sortProduct";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const ProductList: React.FC = () => {
  const [displayData, setDisplayData] = useState<Product[]>(productsData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product;
    direction: "ascending" | "descending";
  } | null>(null);

  const handleSort = (key: keyof Product) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = sortData(displayData, key, direction);
    setDisplayData(sortedData);
  };

  const getSortIcon = (key: keyof Product) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <FaSort />;
    }
    if (sortConfig.direction === "ascending") {
      return <FaSortUp />;
    }
    return <FaSortDown />;
  };

  return (
    <div>
      <input
        onKeyUp={(event) =>
          handleSearchType(event, productsData, setDisplayData)
        }
        placeholder="Wyszukiwana fraza"
        type="search"
        className="form-control"
      />
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name {getSortIcon("name")}
            </th>
            <th onClick={() => handleSort("type")}>
              Type {getSortIcon("type")}
            </th>
            <th onClick={() => handleSort("model")}>
              Model {getSortIcon("model")}
            </th>
            <th onClick={() => handleSort("price")}>
              Price {getSortIcon("price")}
            </th>
            <th onClick={() => handleSort("status")}>
              Status {getSortIcon("status")}
            </th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.model}</td>
              <td>{product.price}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
