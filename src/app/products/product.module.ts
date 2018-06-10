import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductViewShowComponent,
    ProductShowComponent,
    ProductUpdateComponent]
})
export class ProductModule { }
