import { Product } from "../../models/Product";

export const sortData = (
  data: Product[],
  key: keyof Product,
  direction: "ascending" | "descending"
): Product[] => {
  return [...data].sort((a, b) => {
    if (a[key] < b[key]) {
      return direction === "ascending" ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
};
