import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartState } from 'src/app/utils/models';
import { state } from '@angular/animations';
import { Helpers } from 'src/app/utils/helpers';

export const cartFeatureKey = 'cart';

export interface State {

}

export const initialState: CartState = {
  data: null,
  loading: false,
};

const cartReducer = createReducer(
  initialState,

  on(CartActions.loadCarts, state => state),
  on(CartActions.loadCartsSuccess, (state, {data}) => {
    return {...state, data};
  }),
  on(CartActions.addToCart, (state, item) => {
      return {...state, data: Helpers.addOrIncreaseParam(state.data, item, 'count'), loading: true }
    }),
  on(CartActions.addToCartSuccess, state => {
   return {...state, loading: false}
 }),
  on(CartActions.removeFromCart, (state, item) => {
    return { ...state, data: Helpers.removeOrReduceParam(state.data, item, 'count'), loading: true }
  }),
  on(CartActions.removeFromCartSuccess, state => {
    return { ...state, loading: false }
  }),

);

export function reducer(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}
