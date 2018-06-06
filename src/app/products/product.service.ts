// Modules d'angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Classe de modèle
import { Product } from '../model/product';

// RxJs : Les Observables
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({

  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:3000/api/products';
  private httpOptions = { headers: new HttpHeaders ({ 'Content-type' : 'application/json' }) };
  constructor(private http: HttpClient) { }
/**
 * Récuperation des produits via l'API REST de Node
 */
  public getProducts() {
    return this.http.get(this.apiURL).pipe(
      tap(() => console.log('Réception des produits'))
    );
  }
/**
 * Ajout d'un produit en BDD via l'API REST de Node
 */
  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL, product).pipe(
    tap(() => console.log(`Retour de l'API apres l'ajout du produit`))
  );
  }

}
