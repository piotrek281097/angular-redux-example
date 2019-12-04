import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/cart.effects';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]), 
    SharedModule,
    MatButtonModule,
    RouterModule
  ]
})
export class CartModule { }
