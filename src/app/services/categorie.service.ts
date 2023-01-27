import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ResponseApi} from "../models/ResponseApi";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {



  constructor(private http: HttpClient) {
  }
  products !: string[];
  public  produit! : Product;


  public getCat(): Observable<string[]> {
    return this.http.get<string[]>("https://dummyjson.com/products/categories",
      {headers : {
        }});
  }
  public getCatItems(cat : string): Observable<ResponseApi> {
    return this.http.get<ResponseApi>("https://dummyjson.com/products/category/"+cat,
      {headers : {
        }});
  }



}
