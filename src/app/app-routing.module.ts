import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// component perso
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductViewShowComponent } from './products/product-view-show/product-view-show.component';



// on definit les routes
const routes: Routes = [
  {path: 'produits', component: ProductListComponent},
  {path: 'produits/ajout', component: ProductAddComponent},
  {path: 'produits/detail/:id', component : ProductViewShowComponent }
 ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
