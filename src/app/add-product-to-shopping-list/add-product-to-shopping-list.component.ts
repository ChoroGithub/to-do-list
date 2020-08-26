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

  headers = ["Produkt name", "Anzahl der Produkten"];

  
  addProdukt(productname: string, productcount: number) {
    if (productname) {
      let p = new Product();
      p.name = productname;
      p.numberOfItems = productcount;
      p.isActive = true;
      this.productList.liste.push(p);
      }
    }
  
  changeStatus(product: Product) {
    product.isActive = !product.isActive;
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
