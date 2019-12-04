import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCartData } from '../modules/cart/store/cart.selectors';
import { mapTo, tap, take, filter } from 'rxjs/operators';
import { loadCarts } from '../modules/cart/store/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true; //jesli tu zwraca false to nie dziala routing
    return this.store.select(selectCartData).pipe(
      tap((state) => !state && this.store.dispatch(loadCarts())),
      filter((data) => !!data),
      take(1),
      mapTo(true)
    )
  }
  
}
