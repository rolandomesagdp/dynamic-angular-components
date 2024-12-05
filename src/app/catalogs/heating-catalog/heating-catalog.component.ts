import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { HeatingCatalog } from '../heating-catalog.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductsTableComponent } from '../../products/products-table/products-table.component';
import { ProductType } from '../../products/product-type.type';
import { ProductsList } from '../../products/products-list.class';

@Component({
  selector: 'app-heating-catalog',
  standalone: true,
  imports: [CommonModule, MatTabsModule, ProductsTableComponent, MatButtonModule],
  providers: [ProductsList],
  templateUrl: './heating-catalog.component.html',
  styleUrl: './heating-catalog.component.scss'
})
export class HeatingCatalogComponent implements OnInit {
  @Input({ required: true }) heatingCatalog: HeatingCatalog | null = null;
  currentProductType: ProductType = "heatPump";

  constructor (public productsList: ProductsList) { }

  ngOnInit(): void {
    this.setProductsList();
  }

  onCatalogTabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.changeCurrentProductType();
    this.setProductsList();
  }

  private changeCurrentProductType(): void {
    if (this.currentProductType === "heatPump")
      this.currentProductType = "electricHeater";
    else
      this.currentProductType = "heatPump";
  }

  private setProductsList(): void {
    if (this.heatingCatalog) {
      switch (this.currentProductType) {
        default: case "heatPump": {
          this.productsList.init(this.heatingCatalog?.heatPumps);
          break;
        }
        case "electricHeater": {
          this.productsList.init(this.heatingCatalog?.electricHeaters);
        }
      }
    }
  }
}
