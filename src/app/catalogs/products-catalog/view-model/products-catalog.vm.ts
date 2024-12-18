import { CatalogTab } from "./catalog-tab.vm";
import { CatalogType } from "./catalog-type";

export class ProductsCatalogViewModel {
  private _title: string = "";
  private _tabs: CatalogTab[] = [];
  private _activeTab: CatalogTab;

  get tabs(): CatalogTab[] {
    return this._tabs;
  }

  get activeTab(): CatalogTab {
    return this._activeTab;
  }

  get title(): string {
    return this._title;
  }

  private constructor (public catalogType: CatalogType) {
    this.setupViewModel();
    this._activeTab = { ...this._tabs[0] };
  }

  static create(catalogType: CatalogType): ProductsCatalogViewModel {
    const catalogVM = new ProductsCatalogViewModel(catalogType);
    catalogVM.setupViewModel();
    return catalogVM;
  }

  changeActiveTab(tabIndex: number): void {
    this._activeTab = { ...this._tabs[tabIndex] };
  }

  private setupViewModel() {
    switch (this.catalogType) {
      case "heating-catalog": {
        this._title = "Heating solutions recommended for you";
        this.setupHeatingTabs();
        break;
      }
      case "dehum-catalog": {
        this._title = "Dehumidifier solutions recommended for you";
        this.setupDehumTabs();
        break;
      }
    }
  }

  private setupHeatingTabs(): void {
    this._tabs = [{
      id: "heatPump",
      label: "Heat Pumps",
      message: "Some message for the Heat Pumps tab"
    }, {
      id: "electricHeater",
      label: "Electric Heater",
      message: "Some message for the Electric Heater tab"
    }];
  }

  private setupDehumTabs(): void {
    this._tabs = [{
      id: "dehum",
      label: "Dehumidifiers",
      message: "Some message for the Dehumidifier tab"
    }];
  }
}
