import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';

import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home/home.component';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    AppRoutingModule,
    // Ce module doit etre chargé après les autres modules de routage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
