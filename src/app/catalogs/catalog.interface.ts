import { DehumCatalog } from "./dehum-catalog";
import { HeatingCatalog } from "./heating-catalog.interface";

export interface Catalog {
  heating: HeatingCatalog;
  dehumidifier: DehumCatalog;
}
