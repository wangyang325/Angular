import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Product} from '../bean/Product';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  private productId: string;
  cName = 'Product2Component';

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit(): void {
    // this.routerInfo.data.subscribe((data: {product: Product}) => {
    //   this.productId = data.product.id;
    // });
  }

  set name(pName: string) {
    this.cName = pName;
  }

  get name(): string {
    return this.cName;
  }

}
