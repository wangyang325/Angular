import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Service1} from '../service/Service1';
import {Service2} from '../service/Service2';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Product1Component} from '../product1/product1.component';
import {Product2Component} from '../product2/product2.component';
import {LOCAL_STORAGE, SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {CallMicroservice} from '../service/CallMicroservice';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  service1Name: string;
  service2Name: string;
  inputControl = new FormControl();
  mProductId: string;
  toDetails: string;
  receiveF: string;
  @ViewChild(Product1Component)
  product1: Product1Component;
  @ViewChild(Product2Component)
  product2: Product2Component;
  returnRs: string;

  constructor(@Inject(SESSION_STORAGE) private sessionStorage: StorageService,
              @Inject(LOCAL_STORAGE) private localStorage: StorageService,
              private router: Router,
              private service1: Service1,
              private service2: Service2,
              private callMicroservice: CallMicroservice) {
    // Dynamic response programming
    this.inputControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(productId => this.getProduct(productId));
    this.sessionStorage.set('view1', 'set Session by view1');
  }

  ngOnInit(): void {
    this.service1Name = this.service1.serviceName();
    this.service2Name = this.service2.serviceName();
    this.receiveF = '';
    this.returnRs = '';
  }

  getProduct(productId: string): void {
    console.log('GetProduct is running ' + productId);
    this.mProductId = productId;
    this.toDetails = productId;
  }

  doClick(event: MouseEvent) {
    console.log('DoClick is running ' + event.returnValue);
  }

  doChangeChild() {
    this.product1.cName = 'changed by father: p1';
    this.product2.cName = 'changed by father: p2';
  }

  doCallService() {
    this.callMicroservice.getDataFromService('http://localhost:8080/doPostP').subscribe(
      (data) => this.returnRs = data.toString());
  }
}
