import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject,signal } from '@angular/core';
import { Product } from '../models/product';
import { Observable ,tap} from 'rxjs';
const Url='http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private readonly _http=inject(HttpClient);
    private readonly _products=signal<Product[]>([]);
    products=this._products.asReadonly();
    getProducts():Observable<Product[]>{
        return this._http.get<Product[]>(Url).pipe(
            tap(allProducts=>this._products.set(allProducts)));
    }
    addProduct(p: Omit<Product,'id'>):Observable<Product>{
        return this._http.post<Product>(Url,p).pipe(tap(productadded=>
            this._products.update(produit=>[...produit,productadded])
        ))
    }
}
