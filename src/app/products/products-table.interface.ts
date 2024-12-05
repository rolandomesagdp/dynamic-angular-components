import { AppAppearance } from "../appearance/app-appearance";
import { Product } from "./product.interface";

export interface ProductsTable {
  products: Product[];
  appearance: AppAppearance;
}
