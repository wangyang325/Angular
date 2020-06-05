import {Service2} from '../service/Service2';
import {LoggerService} from '../service/LoggerService';
import {NgModule} from '@angular/core';
import {Pipe1} from '../pipe/pipe1';

@NgModule({
  declarations: [
    Pipe1
  ],
  imports: [],
  exports: [
    Pipe1
  ],
  providers:
  // Use Factor
    [{
      provide: Service2, useFactory: (logger: LoggerService) => {
        const service2 = new Service2();
        service2.name = 'Service2 Changed';
        return service2;
      }, deps: [LoggerService]
    }]
})
export class View1Module {
}
