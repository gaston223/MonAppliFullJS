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
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL).pipe(
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

  /**
   * Récuperation d'un produit grace à l'id via L'API REST de Node
   * @param id L'id du produit recu dans l'url
   */
  public showProduct(id: String): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/' + id).pipe(
      tap((product) => { console.log(`Recupération du produit portant l'id ${id}`);
      console.log(product);
    }
    )
    );
  }

}
