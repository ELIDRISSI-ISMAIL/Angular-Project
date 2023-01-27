import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';

import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthComponent } from './Components/auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
// import { CategorieComponent } from './Components/categorie2/categorie.component';
import { InscriptionComponent } from './Components/inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddComponent } from './Components/add/add.component';

import {CategorieComponent} from "./Components/categorie/categorie.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {ProduitsComponent} from "./Components/Panier/produits.component";


const appRoutes: Routes = [
  {path : '', component : AuthComponent},
  {path : 'Lister', component : ListProductsComponent},
  {path : 'details/:product', component : ProductDetailsComponent},
  {path : 'Auth', component : AuthComponent},
  {path : 'categorie', component : CategorieComponent},
  {path : 'Inscription', component : InscriptionComponent},
  {path : 'panier', component : ProduitsComponent},
  {path : 'detail' , component :ProductDetailsComponent}
]

@NgModule({
  declarations: [   //list de composants
    AppComponent, ListProductsComponent, ProductItemComponent,
    ProductDetailsComponent, AuthComponent,
    CategorieComponent, InscriptionComponent, ProduitsComponent,
    AddComponent,  CategorieComponent
  ],
    imports: [        //list des modules
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
      MatSelectModule
    ],
  providers: [],    //service
  bootstrap: [AppComponent]   //composant lancé au demarrage
})
export class AppModule {}
