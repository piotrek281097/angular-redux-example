import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from './cart.reducer';
import { CartState } from 'src/app/utils/models';

export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const selectCartData =  createSelector(
  selectCartState,
  (state: CartState)=> state.data
)

export const selectCartCount = createSelector(
  selectCartData,
  (data) => {
    return data && data.reduce((acc, item) => acc + item.count, 0);
  }
)

export const selectCartLoading = createSelector(
  selectCartState,
  (state: CartState) => state.loading
)

export const selectCartItem = createSelector(
  selectCartData,
  createFeatureSelector('router'),
  (data: any[], { state: {params: { id } } }) => {
    return data.find((item) => item.id === id )
  }
)
