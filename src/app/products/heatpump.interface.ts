import { Product } from "./product.interface";

export interface HeatPump extends Product {
  refrigerant: string;
  minPower: number;
  minCOP: number;
}
