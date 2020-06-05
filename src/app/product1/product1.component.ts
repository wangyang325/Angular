import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  // @Output()
  // receive = new EventEmitter<string>();
  cName = 'Product1Component';

  constructor() {
  }

  ngOnInit(): void {
    // this.receive.emit('emit from product1');
  }

  set name(pName: string) {
    this.cName = pName;
  }

  get name(): string {
    return this.cName;
  }

}
