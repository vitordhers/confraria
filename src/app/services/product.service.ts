import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductDisplay } from '../shared/models/product-display.model';
import PRODUCTS from '../shared/entities/products.constant';
import { IProduct } from '../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: IProduct[];
  constructor(private http: HttpClient) {
    this._products = PRODUCTS;
    // this.http.get(`${environment.apiUrl}/products/findAll`).subscribe(res => console.log);
  }

  public mapProductToDisplayProduct({
    id,
    name,
    categoriesIds,
    unitsAvailable,
    price,
    description,
    slug,
  }: IProduct) {
    return new ProductDisplay(
      id,
      name,
      categoriesIds,
      unitsAvailable,
      price,
      slug,
      description
    );
  }

  public get products$() {
    return of(this._products);
  }
}
