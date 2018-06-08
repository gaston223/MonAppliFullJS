import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// component perso

import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home/home.component';




// on definit les routes
const routes: Routes = [
    {path: '', component: HomeComponent },
  {path: 'error-404', component: Error404Component},
  {path: '**', component : Error404Component}
 ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
