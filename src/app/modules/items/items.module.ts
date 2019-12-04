import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';
import { ItemsService } from './item.service';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ItemsComponent }
    ]),
    SharedModule,
    MatButtonModule
  ],
  providers: [ItemsService] //tutaj ładujemy serwis żeby ładował się lazy loading
})
export class ItemsModule { }
