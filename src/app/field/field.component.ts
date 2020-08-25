import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Product } from '../object/product';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})


export class FieldComponent implements OnInit {

  listName: string;
  produkten = [];

  callall(produktname: string, productcount) {

    console.log("produktname: " + produktname);
    console.log("produktcount: " + productcount)
    //this.addProdukt(produktname)
   // this.addNumber()
  }

  addProdukt(produktname: string) {
    if (produktname) {
      let p = new Product();
      p.name = produktname;
      p.isActive = true;
      this.produkten.push(p);

    }
  }

  listen = [];
  addListe() {
    if (this.produkten) {
      this.listen.push(this.produkten);
    }
  }

  changeStatus(product: Product) {
    product.isActive = !product.isActive;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

