import { Product } from "./product.interface";

export interface Dehum extends Product {
  capacity: number;
  blowingType: string;
  acousticPressure: number;
}
