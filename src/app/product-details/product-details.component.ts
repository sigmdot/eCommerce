import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../products.service';
import {Product} from './../shared/models/product.model'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
       this.product = this.productsService.getProduct(params.id);
      console.log(this.product);
    });
  }

}
