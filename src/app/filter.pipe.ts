import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filtereString : any) {
    
    if(value.length == 0 || filtereString === ''){
      return value;
    }
      const products:any =[];
      for ( const product of value){
         if(product['title'].toLowerCase().indexOf(filtereString.toLowerCase()) !== -1){
           console.log(product);
         products.push(product);
      }
    }
    return products;
  }

}
