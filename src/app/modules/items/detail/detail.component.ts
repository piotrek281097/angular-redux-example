import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItem } from '../../cart/store/cart.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  item$: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.item$ = this.store.select(selectCartItem);
  }

}
