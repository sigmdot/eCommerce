import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import {faShoppingCart,faStar, faHeart, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = null;
  @Output() idEmitter: EventEmitter<string> = new EventEmitter<string>();
  faShoppingCart = faShoppingCart;
  faStar = faStar;
  faHeart = faHeart;
  faStarEmpty = faStarEmpty;
  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(Math.round(i));
  }
  counterEmpty(i:number){
    return new Array(5 - Math.round(i));
  }

  agregarCarrito(){
    console.log('Producto agregado al carrito', this.product.id);
    this.idEmitter.emit(this.product.id);
  }
}
