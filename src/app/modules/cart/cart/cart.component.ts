import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectCartData } from '../store/cart.selectors';
import { addToCart, removeFromCart } from '../store/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts$: any;

  constructor(
    private store: Store<any>
  ) { 
    // store.subscribe(console.log)
    this.carts$ = store.select(selectCartData) 
  }

  ngOnInit() {
  }

  add(item) {
    console.log(item)
    this.store.dispatch(addToCart(item))
  }

  remove(item) {
    console.log(item)
    this.store.dispatch(removeFromCart(item))
  }

}
