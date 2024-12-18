import { DehumCatalog } from "./dehum-catalog";
import { HeatingCatalog } from "./heating-catalog.interface";

export interface AnalysisResult {
  heating: HeatingCatalog;
  dehumidifier: DehumCatalog;
}
