import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductsTableComponent } from '../../products/products-table/products-table.component';
import { ProductsList } from '../../products/products-list.class';
import { AnalysisResult } from '../analysis-result.interface';
import { ProductsCatalogViewModel } from './view-model/products-catalog.vm';
import { CatalogType } from './view-model/catalog-type';

@Component({
  selector: 'app-products-catalog',
  standalone: true,
  imports: [CommonModule, MatTabsModule, ProductsTableComponent, MatButtonModule],
  providers: [ProductsList],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.scss'
})
export class ProductsCatalogComponent implements OnInit {
  @Input({ required: true }) catalogType: CatalogType = "heating-catalog";
  @Input({ required: true }) catalog: AnalysisResult | null = null;

  catalogVM: ProductsCatalogViewModel | null = null;

  constructor (public productsList: ProductsList) { }

  ngOnInit(): void {
    this.catalogVM = ProductsCatalogViewModel.create(this.catalogType);
    this.setProductsList();
  }

  onCatalogTabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.catalogVM?.changeActiveTab(tabChangeEvent.index);
    this.setProductsList();
  }

  private setProductsList(): void {
    if (this.catalog?.heating) {
      switch (this.catalogVM?.activeTab.id) {
        default: case "heatPump": {
          this.productsList.init(this.catalog?.heating.heatPumps);
          break;
        }
        case "electricHeater": {
          this.productsList.init(this.catalog?.heating.electricHeaters);
          break;
        }
        case "dehum": {
          this.productsList.init(this.catalog?.dehumidifier.dehumidifiers);
          break;
        }
      }
    }
  }
}
