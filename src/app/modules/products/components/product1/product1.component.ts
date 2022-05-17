import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {

  @Input() name: string = '';
  @Input() isCR: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
