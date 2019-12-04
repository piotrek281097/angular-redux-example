import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, tap, withLatestFrom, map, mapTo, delay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as CartActions from './cart.actions';
import { Store } from '@ngrx/store';
import { selectCartData } from './cart.selectors';
import { CartService } from '../cart.service';
import { addToCartSuccess, loadCartsSuccess, removeFromCartSuccess } from './cart.actions';


@Injectable()
export class CartEffects {


  loadCarts$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CartActions.loadCarts),
      map((val)=> this.cartService.getStorage()),
      map((data) => loadCartsSuccess({data}))
    );
  });

  updateCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addToCart, CartActions.removeFromCart),
      delay(2223),
      withLatestFrom(this.store.select(selectCartData)),
      tap(([, data]) => this.cartService.updateStorage(data)),
      mapTo(addToCartSuccess()))
  });

  constructor(private actions$: Actions, 
    private store: Store<any>,
    private cartService: CartService) {}
  
}
