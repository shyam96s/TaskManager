import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    let currentyear = new Date().getFullYear();
    let birthyear = new Date(value).getFullYear();
    let age = currentyear-birthyear;

    return (age);
  }

}
