import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../object/product';
import { ProductList } from '../object/productList';

@Component({
  selector: 'app-add-product-to-shopping-list',
  templateUrl: './add-product-to-shopping-list.component.html',
  styleUrls: ['./add-product-to-shopping-list.component.css']
})
export class AddProductToShoppingListComponent implements OnInit {


  @Input() productList;
  @Input() fakeElement;

  headers = ["Product name", "Count of Products"];
  a = 0;
  addProduct(productname: string, productcount: number) {
    if (productname) {
      let p = new Product();
      p.name = productname;
      if (productcount) {
        if (isNaN(productcount)) {
          alert("The count should be a number")
        }
        else {
          p.numberOfItems = productcount;
          p.isActive = true;
          this.productList.liste.push(p);
        }
      }

    }
  }

  
  changeStatus(product: Product, pl: ProductList) {
    product.isActive = !product.isActive;

    if (pl) {
      for (let i of pl.liste) {
        if (!i.isActive) {
          this.a = this.a + 1;
        }
      }
      if (pl.liste.length == this.a) {
        alert("Glückwunsch, Sie haben alles notwendige gekauft");
      }
      this.a = 0;
    }
  }

  constructor() {  }

  ngOnInit(): void {
  }

}
