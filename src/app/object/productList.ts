import { Product } from './product';

export class ProductList {
  public name: string;
  public liste: Product[]

  constructor() {
    this.liste = [];
  }
}
