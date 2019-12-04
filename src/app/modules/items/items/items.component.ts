import { Component, OnInit, ContentChild } from '@angular/core';
import { ItemsService } from '../item.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addToCart } from '../../cart/store/cart.actions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data$: Observable<any>;

  constructor(private itemService: ItemsService,
    private store: Store<any>) { }

  ngOnInit() {
    this.data$ = this.itemService.fetch()
  }

  addToCart(item) {
    console.log(item)
    this.store.dispatch(addToCart(item))
  }

  more(item) {
    
  }

}
