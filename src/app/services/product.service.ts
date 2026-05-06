import { Injectable } from '@angular/core';
import { Product } from '../../types/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 0, name: 'Computer', price: 12000, selected: true },
    { id: 1, name: 'Printer', price: 9000, selected: false },
    { id: 2, name: 'Smart Phone', price: 2300, selected: true },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}
