import { Routes } from '@angular/router';
import { FullCatalogComponent } from './catalogs/full-catalog/full-catalog.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "catalog" },
  { path: 'catalog', component: FullCatalogComponent },
  { path: '**', redirectTo: 'catalog' }
];
