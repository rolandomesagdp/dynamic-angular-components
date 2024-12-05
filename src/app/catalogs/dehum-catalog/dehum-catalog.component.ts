import { Component, Input, OnInit } from '@angular/core';
import { DehumCatalog } from '../dehum-catalog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from '../../products/products-table/products-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductsList } from '../../products/products-list.class';
import { ProductType } from '../../products/product-type.type';

@Component({
  selector: 'app-dehum-catalog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTabsModule, ProductsTableComponent],
  providers: [ProductsList],
  templateUrl: './dehum-catalog.component.html',
  styleUrl: './dehum-catalog.component.scss'
})
export class DehumCatalogComponent implements OnInit {
  @Input({ required: true }) dehumCatalog: DehumCatalog | null = null;
  currentProductType: ProductType = "dehum";

  constructor (public productsList: ProductsList) { }

  ngOnInit(): void {
    this.setProductsList();
  }

  private setProductsList(): void {
    if (this.dehumCatalog) {
      this.productsList.init(this.dehumCatalog?.dehumidifiers);
    }
  }
}
