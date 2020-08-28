import { Component, OnInit, Input } from '@angular/core';
import { ProductLists } from '../object/productLists';

@Component({
  selector: 'app-list-saver',
  templateUrl: './list-saver.component.html',
  styleUrls: ['./list-saver.component.css']
})
export class ListSaverComponent implements OnInit {

  @Input() productList;
  @Input() headers;
  @Input() changeStatus;

  a = 0;

  productLists: ProductLists;


  addListeToLists() {
    console.log("add Liste")
    if (this.productList) {
        console.log(this.productLists)
        this.productLists.list.push(this.productList);
    }
  }

  constructor(
  ) {
    this.productLists = new ProductLists();
  }

  ngOnInit(): void {
  }
}
