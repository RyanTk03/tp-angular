import { Injectable } from '@angular/core';
import { Product } from '../../types/models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_ENDPOINT = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.API_ENDPOINT);
  }

  deleteProduct(product: Product) {
    return this.http.delete<void>(`${this.API_ENDPOINT}/${product.id}`);
  }
}
