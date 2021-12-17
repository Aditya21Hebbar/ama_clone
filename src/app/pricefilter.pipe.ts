import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {
   transform(value: any , logic: any){
   if(value.length == 0 || logic === ''){
     return value;
    }
    console.log(logic)
   const products:any =[];
   for (const product of value){
    console.log("logic")
    if(logic === 'Under-20,000' && product.price < 20000 ) {
      products.push(product)
    }
    else  if(logic === '20000-40000' && product.price > 20000 && product.price < 40000)
        {
          products.push(product)
        }
    else if(logic === '40000-60000' && product.price > 40000 && product.price < 60000)
        {
          products.push(product)
        }
    else if(logic === '60000-90000' && product.price > 60000 && product.price < 90000)
        {
          products.push(product)
        }
    }
    console.log(products)
    return products;
  }

    
  }