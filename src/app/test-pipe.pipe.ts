import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: string): string {
    let newStr: string="";
   
    newStr="Hola! Cómo estás " +value+"?";
    return newStr;
  }

}
