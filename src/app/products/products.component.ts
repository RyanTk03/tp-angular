import { Component } from '@angular/core';
import { Product } from '../../types/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent {
  products: Product[] = []

  ngOnInit() {
    this.products = [
      { id: 0, name: 'Computer', price: 12000, selected: true },
      { id: 1, name: 'Printer', price: 9000, selected: false },
      { id: 2, name: 'Smart Phone', price: 2300, selected: true },
    ];
  }

  handleDelete(product: Product) {
    const v = confirm('êtes vous sûre de vouloir suprimer?');

    if (v) {
      this.products = this.products.filter(p => p.id !== product.id)
    }
  }
}
