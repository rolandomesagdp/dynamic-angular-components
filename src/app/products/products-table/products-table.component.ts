import { Component, input, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeatPumpsTableComponent } from '../heat-pumps-table/heat-pumps-table.component';
import { ElectricHeatersTableComponent } from '../electric-heaters-table/electric-heaters-table.component';
import { CommonModule } from '@angular/common';
import { DehumTableComponent } from '../dehum-table/dehum-table.component';
import { UnsupportedProductTableComponent } from '../unsupported-product-table/unsupported-product-table.component';
import { ProductType } from '../product-type.type';
import { Product } from '../product.interface';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss'
})
export class ProductsTableComponent implements OnInit, OnChanges {
  @Input({ required: true }) productType: ProductType | null = null;
  @Input() products: Product[] = [];
  componentOutlet: any = undefined;
  tableComponentInputs: any = undefined;

  ngOnInit(): void {
    this.setUpOutlet();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setUpOutlet();
  }

  private setUpOutlet(): void {
    switch (this.productType) {
      case "heatPump": {
        this.componentOutlet = HeatPumpsTableComponent;
        break;
      }
      case "electricHeater": {
        this.componentOutlet = ElectricHeatersTableComponent;
        break;
      }
      case "dehum": {
        this.componentOutlet = DehumTableComponent;
        break;
      }
      default: {
        this.componentOutlet = UnsupportedProductTableComponent;
      }
    }
    this.tableComponentInputs = {
      products: this.products
    };
  }
}
