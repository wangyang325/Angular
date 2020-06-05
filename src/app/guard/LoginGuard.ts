import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
@Injectable()
// CanActivate:before router
export class LoginGuard implements CanActivate {
  canActivate() {
    console.log('LoginGuard is running!!!');
    return true;
  }
}
