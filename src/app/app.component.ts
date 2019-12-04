import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { upAction } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apka2';
  x$: any;
  constructor(private store: Store<any>) {
     store.subscribe(console.log)
    this.x$ = store.select('x'); //select zwraca observable, wybieramy fragment stora
  }

  updateDate() {
    this.store.dispatch(upAction())
  }
}
