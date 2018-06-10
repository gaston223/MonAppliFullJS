import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: '../product-add/product-add.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  private title: String;
  private submitValue: String;
  private product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
    this.product = new Product();
    this.title = `Modification d'un produit`;
    this.submitValue = `Modifier`;
  }

  ngOnInit() {
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
  private saveProduct(): void {
    console.log('Formulaire de modification soumis');
    this.productService.update(this.product).subscribe((data) => {
      console.log('Modification effectuée ' + data.result);
      if (data.result) {
        this.router.navigate(['/produits/detail/' + this.product._id]);
      }
    });
  }
}
