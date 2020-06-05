import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../bean/Product';
import {Injectable} from '@angular/core';

// Data protect
@Injectable()
export class ProductGuard implements Resolve<Product> {
  private product: Product;
  constructor(private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('ProductGuard is running');
    this.product = new Product();
    this.product.id = '1';
    return this.product;
  }

}
