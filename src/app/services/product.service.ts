import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {HttpClient} from "@angular/common/http";
import { ResponseApi} from "../models/ResponseApi";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  products !: Product[];

  constructor(private http : HttpClient) { }

  public getProducts(): Observable<ResponseApi> {
      return this.http.get<ResponseApi>("https://dummyjson.com/products?skip=4&limit=12",
        {headers : {
          }});
  }

  public getProductsbySearch(s : string) : Observable<ResponseApi> {
    return this.http.get<ResponseApi>("https://dummyjson.com/products/search?limit=12&q="+s,
      {headers : {
        }});
  }


  public getCatItems(cat : string): Observable<ResponseApi> {
    return this.http.get<ResponseApi>("https://dummyjson.com/products/category/"+cat,
      {headers : {
        }});
  }
}
