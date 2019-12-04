import { createAction, props } from '@ngrx/store';

export const loadCarts = createAction(
  '[Cart] Load Carts'
);

export const loadCartsSuccess = createAction(
  '[Cart] Load Carts Success',
  props<{ data: any[] }>()
);

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props() 
);

export const addToCartSuccess = createAction(
  '[Cart] Add To Cart Success',
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props()
);

export const removeFromCartSuccess = createAction(
  '[Cart] Remove From Cart Success',
);




