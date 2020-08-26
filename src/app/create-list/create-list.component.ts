import { Component, OnInit } from '@angular/core';
import { ProductList } from '../object/productList';
import { ProductLists } from '../object/productLists';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  productList: ProductList;

  fakeElement: boolean;

  createNewList() {
    this.fakeElement = true;
    this.productList = new ProductList();
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
