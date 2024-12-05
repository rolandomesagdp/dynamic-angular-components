import { Component, Inject, Input } from '@angular/core';
import { APP_APPEARANCE, AppAppearance } from '../../appearance/app-appearance';
import { ProductsTable } from '../products-table.interface';
import { Dehum } from '../dehum';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dehum-table',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dehum-table.component.html',
  styleUrl: './dehum-table.component.scss'
})
export class DehumTableComponent implements ProductsTable {
  @Input() products: Dehum[] = [];

  constructor (@Inject(APP_APPEARANCE) public appearance: AppAppearance) { }

}
