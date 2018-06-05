import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// component perso
import { ProductListComponent } from './products/product-list/product-list.component';



// on definit les routes
const routes: Routes = [
  {path: 'produits', component: ProductListComponent}
 ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
