import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.css']
})
export class ProductViewShowComponent implements OnInit, DoCheck {

  public product: Product;
  constructor(private productService: ProductService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.findProduct();
  }

  ngDoCheck(): void {
    if (this.product) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== this.product._id) {
        this.findProduct();
      }
    }
  }

  private findProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Utilisation du service pour récuperer le produit de l'API et l'attribuer à notre produit de component
    this.productService.showProduct(id).subscribe(
      (productAPI) => {
        if (productAPI) {
        this.product = productAPI;
      } else {
        // Redirection vers la page 404
        this.router.navigate(['/error-404']);
            }
        }
    );
  }

  // Suppression d'un produit via L'API avec son URL
private remove(): void {
  this.productService.delete(this.product._id).subscribe(
    (data) => {
      if (data.result) {
        this.router.navigate(['/produits']);
      } else {
        console.log(`L'id envoyé est incorrecte`);
      }
    }
  );
}

}
