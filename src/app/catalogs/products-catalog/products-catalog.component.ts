import { Component } from '@angular/core';
import { HeatingCatalogComponent } from '../heating-catalog/heating-catalog.component';
import { CatalogService } from '../catalog.service';
import { Catalog } from '../catalog.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { DehumCatalogComponent } from '../dehum-catalog/dehum-catalog.component';

@Component({
  selector: 'app-products-catalog',
  standalone: true,
  imports: [CommonModule, MatDividerModule, HeatingCatalogComponent, DehumCatalogComponent],
  providers: [CatalogService],
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.scss'
})
export class ProductsCatalogComponent {
  catalog$: Observable<Catalog> = this.catalogService.getCatalog();

  constructor (private catalogService: CatalogService) { }
}
