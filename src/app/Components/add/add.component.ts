import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../services/produit.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-add-product',
  template: `
    <form (ngSubmit)="onSubmit()">
      <label for="product">Product:</label><br>
      <input type="text" [(ngModel)]="product" name="product"><br>
      <button type="submit">Add product</button>
    </form>
  `,
  styles: []
})
export class AddComponent implements OnInit {
  product!: any;

  constructor(private productService: ProduitService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.addProduct(this.product);
    this.product = '';
  }


}
