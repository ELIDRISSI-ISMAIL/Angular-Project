import {Component, OnInit} from "@angular/core";
import {Product} from "../../models/Product";
import {ProduitService} from "../../services/produit.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: 'produits.component.html',
  styleUrls: ['produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products!: [Product,number][];

  total!: number;

  constructor(private produitService: ProduitService,
              private router : Router) {
  }

  ngOnInit() {
    this.products = this.produitService.getProducts();
    this.total = this.products.reduce((sum, obj) => sum + (obj[0].price*obj[1]), 0);
    console.log(this.total);  // affiche la somme de tous les attributs

  }


// Fonctions des boutons
  incremQte(prod: [Product, number]) {
    prod[1]++;
    this.total = this.products.reduce((sum, obj) => sum + (obj[0].price*obj[1]), 0);

  }

  decrQte(prod: [Product, number]) {
    if(prod[1]>1){
      prod[1]--;
      this.total = this.products.reduce((sum, obj) => sum + (obj[0].price*obj[1]), 0);

    }

  }

  remove(product: [Product, number]) {


    const filteredArray = this.products.filter(subArray => !subArray.some(val => val === product[0]));
    this.products = filteredArray;
    this.total = this.products.reduce((sum, obj) => sum + (obj[0].price*obj[1]), 0);
    alert(product[0].title+"supprimé avec succès.");
  }



  checkout() {
    alert("Merci pour votre achat :) ");
    this.products = [];
    this.router.navigate(['/Lister']).then();
  }
}
