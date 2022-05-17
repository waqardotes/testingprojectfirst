import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  passValue(evt: any) {
    const val = evt.target.value;
    this.data = val;
    console.log(val)
  }

}
