import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.css']
})
export class ProductViewShowComponent implements OnInit {


  public product: Product;
  constructor(private productService: ProductService,
  private route: ActivatedRoute,
  private router: Router) { }

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

}
