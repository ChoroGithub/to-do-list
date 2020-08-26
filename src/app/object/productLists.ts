import { ProductList } from './productList';

export class ProductLists {
  public name: string;
  public list: ProductList[]

  constructor() {
    this.list = [];
  }
}
