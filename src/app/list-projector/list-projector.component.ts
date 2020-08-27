import { Component, OnInit, Input } from '@angular/core';
import { ProductList } from '../object/productList';

@Component({
  selector: 'app-list-projector',
  templateUrl: './list-projector.component.html',
  styleUrls: ['./list-projector.component.css']
})
export class ListProjectorComponent implements OnInit {

  @Input() headers;
  @Input() productlist: ProductList;
  @Input() changeStatus;

  constructor() { }

  ngOnInit(): void {
  }

}