import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyshoppRoutingModule } from './myshopp-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MyshoppRoutingModule
  ]
})
export class MyshoppModule { }
