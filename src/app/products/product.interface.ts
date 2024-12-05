import { BrandName } from "./brand.type";
import { ProductType } from "./product-type.type";

export interface Product {
  id: number;
  productName: string;
  brand: BrandName;
  type: ProductType;
}
