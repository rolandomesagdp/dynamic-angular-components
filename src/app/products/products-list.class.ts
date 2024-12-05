import { Injectable } from "@angular/core";
import { Product } from "./product.interface";

@Injectable()
export class ProductsList {
  private fullProductsList: Product[] = [];
  currentProductsPage: Product[] = [];

  pageSize: number = 2;

  constructor () { }

  init(fullProductsList: Product[]): void {
    this.fullProductsList = fullProductsList;
    this.currentProductsPage = [...this.fullProductsList.slice(0, this.pageSize)];
  }

  nextPage(): void {
    const currentStartIndex: number = this.getCurrentStartIndex();
    const nextStartIndex: number = currentStartIndex + this.pageSize;
    this.currentProductsPage = [...this.fullProductsList.slice(nextStartIndex, nextStartIndex + this.pageSize)];
  }

  previousPage(): void {
    const currentStartIndex: number = this.getCurrentStartIndex();
    this.currentProductsPage = this.fullProductsList.slice(currentStartIndex - this.pageSize, currentStartIndex);
  }

  private getCurrentStartIndex(): number {
    if (this.currentProductsPage.length > 0) {
      const firstProduct: Product | undefined = this.currentProductsPage.at(0);
      if (firstProduct) {
        const indexInFullList = this.fullProductsList.findIndex(x => x.id === firstProduct.id);
        return indexInFullList;
      }
    }
    return 0;
  }
}
