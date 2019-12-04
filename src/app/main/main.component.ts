import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectCartData, selectCartCount, selectCartLoading } from '../modules/cart/store/cart.selectors';
import { loadCarts } from '../modules/cart/store/cart.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  cartCount$: Observable<any>;
  cartLoading$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver,
    private store: Store<any>) {
    this.cartCount$ = store.select(selectCartCount)
    this.cartLoading$ = store.select(selectCartLoading)
    // this.store.dispatch(loadCarts()) - tu bylo przed stworzeniem guarda
    }

}
