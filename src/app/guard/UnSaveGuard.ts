import {CanDeactivate} from '@angular/router';
import {Product1Component} from '../product1/product1.component';
// CanDeactivate:After router
export class UnSaveGuard implements CanDeactivate<Product1Component>{
  canDeactivate() {
    window.confirm('Are sure to leave?');
    return true;
  }
}
