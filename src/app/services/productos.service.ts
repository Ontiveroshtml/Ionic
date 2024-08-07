import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URL = 'http://localhost:5000/api/product';

  constructor(private http: HttpClient) { }

  getProducst(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  createProduct(product: any): Observable<Product> {
    return this.http.post<Product>(this.URL, product);
  }

  editProduct(product: any): Observable<Product> {
    return this.http.patch<Product>(this.URL, product);
  }

   //   deleteProduct(id: string): Observable<Product> {
  //     console.log(id)
  //     return this.http.delete<Product>(this.url + '/'+id);
  // }

}
