import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { Product1Component } from './components/product1/product1.component';
import { Product2Component } from './components/product2/product2.component';
import { Product3Component } from './components/product3/product3.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    Product1Component,
    Product2Component,
    Product3Component,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
