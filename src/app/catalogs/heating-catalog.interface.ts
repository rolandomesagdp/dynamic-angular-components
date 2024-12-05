import { ElectricHeater } from "../products/electric-heater";
import { HeatPump } from "../products/heatpump.interface";

export interface HeatingCatalog {
  heatPumps: HeatPump[];
  electricHeaters: ElectricHeater[];
}
