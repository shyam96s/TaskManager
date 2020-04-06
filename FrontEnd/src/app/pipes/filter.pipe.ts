import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if(sName === ""){
      return value;
    }
    const plyArray : any[]=[];
    for (let i=0;i<value.length;i++){
      let teamName : string=value[i].team;
      if(teamName.startsWith(sName)){
        plyArray.push(value[i]);
      }
    }
    return plyArray;
  }

}
