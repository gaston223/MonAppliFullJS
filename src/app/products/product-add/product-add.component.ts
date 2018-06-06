import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  // Produit que l'on va envoyer au serveur
  private product: Product;
  constructor(private productService: ProductService) {
    this.product = new Product();
  }
/**
 * Appel du service pour crer le produit en BDD (via l'API)
 */

  private saveProduct() {
    console.log('Formulaire soumis');
    // Ajout de la date de création
    this.product.createdAt = new Date();

    this.productService.addProduct(this.product).subscribe(
      (productAPI) => {
        console.log('Reception du nouveau produit');
        console.log(productAPI);
      }
    );
  }
}
