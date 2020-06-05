import {Injectable, Input} from '@angular/core';
import {ServiceImp} from './ServiceImp';

@Injectable()
export class ServiceF implements ServiceImp {

  private sName = 'Service2';

  public set name(pName: string) {
    this.sName = pName;
  }

  public get name(): string {
    return this.sName;
  }

  public serviceName(): string {
    return this.name;
  }
}
