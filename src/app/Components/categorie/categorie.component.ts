import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CategorieService} from "../../services/categorie.service";
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})

export class CategorieComponent implements OnInit {
  categories : string[];

  @Output() selectedCat = new EventEmitter<string>();


  constructor(private prodService : ProductService,
              private catService : CategorieService,)
  {
    this.categories=[];
  }


  ngOnInit() {
    this.getCatego();
    console.log("this is item : "+'hello');
    console.log("this is selectedCat :"+this.selectedCat)
  }

  selectCat(cat: any) {
    this.selectedCat.emit(cat);
  }


  public itemclicked(item: string) : void {
    console.log("this is item : "+item);
     console.log("this is selectedCat :"+this.selectedCat)
  }

  public getCatego(): void {
    this.catService.getCat().subscribe(
      (response) => {
        this.categories = response;
        console.log(response);
      },

    );
  }
}
