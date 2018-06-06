import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.css']
})
export class ProductViewShowComponent implements OnInit {

  public product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // Utilisation du service pour récuperer le produit de l'API et l'attribuer à notre produit de component
    this.productService.showProduct(id).subscribe(
      (productAPI) => this.product = productAPI
    );
  }

}
