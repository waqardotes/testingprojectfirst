import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product1Component } from './components/product1/product1.component';
import { Product2Component } from './components/product2/product2.component';
import { Product3Component } from './components/product3/product3.component';
import { ProductsComponent } from './products.component';

const children: Routes = [ 
  {
    path: 'product1',
    component: Product1Component, 
  },
  {
    path: 'product2',
    component: Product2Component,
  },
  {
    path: 'product3',
    component: Product3Component,
  },
];

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: children,
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
