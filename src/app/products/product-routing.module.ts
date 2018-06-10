import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component persos
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

// On definit les routes des produits
const routesProduct: Routes = [
  {path: 'produits', component: ProductListComponent},
  {path: 'produits/ajout', component: ProductAddComponent},
  {path: 'produits/detail/:id', component : ProductViewShowComponent },
  {path: 'produits/modification/:id', component : ProductUpdateComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routesProduct)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ProductRoutingModule { }
