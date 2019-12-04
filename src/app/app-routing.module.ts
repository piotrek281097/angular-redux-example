import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './modules/cart/cart/cart.component';
import { CartGuard } from './guards/cart.guard';
import { DetailComponent } from './modules/items/detail/detail.component';


const routes: Routes = [
  { path: '', canActivate: [CartGuard], children:[
    { path: 'game', loadChildren: () => import('./modules/game/game.module').then((m) => m.GameModule) },
    { path: 'register', loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule) },
    { path: 'items', loadChildren: () => import('./modules/items/items.module').then((m) => m.ItemsModule) },
    { path: 'cart/:id', component: DetailComponent},
    { path: 'cart', component: CartComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
