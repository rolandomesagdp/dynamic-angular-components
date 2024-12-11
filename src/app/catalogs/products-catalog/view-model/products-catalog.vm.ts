import { CatalogTab } from "./catalog-tab.vm";
import { CatalogType } from "./catalog-type";

export class ProductsCatalogViewModel {
  tabs: CatalogTab[] = [];
  activeTab: CatalogTab;

  constructor (public catalogType: CatalogType) {
    this.setupViewModel();
    this.activeTab = { ...this.tabs[0] };
  }

  changeActiveTab(tabIndex: number): void {
    this.activeTab = { ...this.tabs[tabIndex] };
  }

  private setupViewModel() {
    switch (this.catalogType) {
      case "heating": {
        this.setupHeatingTabs();
        break;
      }
      case "dehum": {
        this.setupDehumTabs();
        break;
      }
    }
  }

  private setupHeatingTabs(): void {
    this.tabs = [{
      id: "heatPump",
      label: "Heat Pumps"
    }, {
      id: "electricHeater",
      label: "Electric Heater"
    }];
  }

  private setupDehumTabs(): void {
    this.tabs = [{
      id: "dehum",
      label: "Dehumidifiers"
    }];
  }
}
