import { Product } from "../../models/Product";
import { Dispatch, SetStateAction } from "react";

export const handleSearchType = (
  event: React.KeyboardEvent<HTMLInputElement>,
  products: Product[],
  setDisplayData: Dispatch<SetStateAction<Product[]>>
) => {
  const phrase = event.currentTarget.value.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(phrase) ||
      product.type.toLowerCase().includes(phrase) ||
      product.model.toLowerCase().includes(phrase)
  );
  setDisplayData(filteredProducts);
};
