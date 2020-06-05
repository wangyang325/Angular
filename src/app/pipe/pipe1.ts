import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1 implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log('pipe1 is running');
    return value + '   pipe1';
  }

}
