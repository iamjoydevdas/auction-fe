import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';

const routes: Routes = [
  { path: 'seller', component: SellerComponent },
  { path: 'buyer', component: BuyerComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
