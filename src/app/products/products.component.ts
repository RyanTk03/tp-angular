import { Component } from '@angular/core';
import { Product } from '../../types/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent {
  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: () => {
        console.log('error on getAllProducts');
      }
    });
  }

  handleDelete(product: Product) {
    const v = confirm('êtes vous sûre de vouloir suprimer?');

    if (v) {
      this.productService.deleteProduct(product).subscribe({
        next: () => {
          this.getAllProducts();
        },
        error: () => {
          console.log('error on deleteProduct');
        }
      });
    }
  }
}
