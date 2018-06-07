import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: '../product-view-show/product-view-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  @Input() private product: Product;
  constructor() { }

  ngOnInit() {
  }

}
