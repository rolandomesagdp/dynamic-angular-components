import { Component } from '@angular/core';
import { ProductsCatalogComponent } from '../products-catalog/products-catalog.component';
import { CatalogService } from '../catalog.service';
import { AnalysisResult } from '../analysis-result.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-full-catalog',
  standalone: true,
  imports: [CommonModule, MatDividerModule, ProductsCatalogComponent],
  providers: [CatalogService],
  templateUrl: './full-catalog.component.html',
  styleUrl: './full-catalog.component.scss'
})
export class FullCatalogComponent {
  catalog$: Observable<AnalysisResult> = this.catalogService.getCatalog();

  constructor (private catalogService: CatalogService) { }
}
