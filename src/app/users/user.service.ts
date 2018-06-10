import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../model/user';

// RxJs : Les Observables
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://localhost:3000/api/user';
  private httpOptions = { headers: new HttpHeaders ({ 'Content-type' : 'application/json' }) };
  constructor(private http: HttpClient) { }

    public userRegister(user: User): Observable <{result: Boolean}> {
    return this.http.post<{result: Boolean}>(this.apiURL, user, this.httpOptions).pipe(
    tap(() => console.log(`Retour de l'API apres l'ajout de l'utilisateur`))
    );
  }
}
