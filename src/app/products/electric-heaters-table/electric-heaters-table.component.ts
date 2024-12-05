import { Component, Inject, Input } from '@angular/core';
import { APP_APPEARANCE, AppAppearance } from '../../appearance/app-appearance';
import { MatCardModule } from '@angular/material/card';
import { ProductsTable } from '../products-table.interface';
import { ElectricHeater } from '../electric-heater';

@Component({
  selector: 'app-electric-heaters-table',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './electric-heaters-table.component.html',
  styleUrl: './electric-heaters-table.component.scss'
})
export class ElectricHeatersTableComponent implements ProductsTable {
  @Input() products: ElectricHeater[] = [];

  constructor (@Inject(APP_APPEARANCE) public appearance: AppAppearance) { }
}
