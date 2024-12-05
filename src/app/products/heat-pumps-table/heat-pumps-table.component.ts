import { Component, Inject, Input } from '@angular/core';
import { APP_APPEARANCE, AppAppearance } from '../../appearance/app-appearance';
import { MatCardModule } from '@angular/material/card';
import { ProductsTable } from '../products-table.interface';
import { HeatPump } from '../heatpump.interface';

@Component({
  selector: 'app-heat-pumps-table',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './heat-pumps-table.component.html',
  styleUrl: './heat-pumps-table.component.scss'
})
export class HeatPumpsTableComponent implements ProductsTable {
  @Input() products: HeatPump[] = [];

  constructor (@Inject(APP_APPEARANCE) public appearance: AppAppearance) { }
}
