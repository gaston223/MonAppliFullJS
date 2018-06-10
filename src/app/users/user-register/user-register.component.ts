import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  // Utilisateur qui souhaite s'inscrire (ajouter dans la BDD)
  private user: User;
  constructor(private userService: UserService,
    private router: Router) {

    this.user = new User();
  }

  private register(): void {
    this.userService.userRegister(this.user).subscribe(
      (user) => {
        this.router.navigate(['/']);
      }
    );
  }
  ngOnInit() {
  }

}
