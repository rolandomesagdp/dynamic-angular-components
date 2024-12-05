import { Product } from "./product.interface";

export interface ElectricHeater extends Product {
  maxPower: number;
  poolTreatment: string;
  timeToReachSetPoint: number;
}
