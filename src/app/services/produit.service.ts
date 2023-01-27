import { Injectable } from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private products: [Product,number][] = [];


  constructor() { }


  addProduct(produit : Product) {
    if(this.products.some(subArray => subArray.includes(produit))){
     alert("Vous avez déjà ajouté ce produit !!!");
    }
    else {
      alert(produit.title+" ajouté au panier avec succès !")
      this.products.push([produit,1]);
      console.log(this.products);

    }
  }

  getProducts() {
    return this.products;
  }
}
