import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';

const routesUser: Routes = [
{path: 'inscription', component: UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesUser)],
  exports: [RouterModule]

})
export class UserRoutingModule { }
