import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {CategorieService} from "../../services/categorie.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product! : Product;

  constructor(private router: Router,
              private productService : ProductService,
              private categoService : CategorieService) {
  }
  ngOnInit() {
    this.product=this.categoService.produit;
console.log(this.product);

  }

  return() {
      this.router.navigate(['/Lister']).then();
  }
}
