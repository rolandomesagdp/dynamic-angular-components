import { Routes } from '@angular/router';
import { ProductsCatalogComponent } from './catalogs/products-catalog/products-catalog.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "products-catalog" },
  { path: 'products-catalog', component: ProductsCatalogComponent },
  { path: '**', redirectTo: 'products-catalog' }
];
