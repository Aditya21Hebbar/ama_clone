import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent 
{
  title = 'clone-amazon';
  filteredString: any = '';
  radioSelected:string = '';
  ice:any = '';
  isChecked : any;
  rate: any=' ';
  ratings:any='';
  isCheckedName: any;
   products =[ {
      "id": 1,
      "title": "HP laptop",
      "price": 45000.00,
      "description": "Enjoy your HP experience",
      "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fc4a48a1c-1547-4268-aef9-1452705df6a8.012ca742717d4d29b8187a7f3062f9d8.jpeg&f=1&nofb=1",
      "InStock": true,
      "rating": {
      "rate": 2.1,
      "count": 26
                 }
    },
    {
      "id": 2,
      "title": "macbook pro",
      "price": 60000.00,
      "description": "The smooth mac youll ever get",
      "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hiptoro.com%2Fwp-content%2Fuploads%2F2019%2F06%2FMacBook-Pro-2019-e1559558024264.jpg&f=1&nofb=1",
      "InStock": false,
      "rating": {
      "rate": 3.9,
      "count": 12
      }
    },
    {
      "id": 3,
      "title": "Microsoft Notebook",
      "price": 45000.00,
      "description": "notebook computer that you can carry anywhere you want",
      "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.esellerpro.com%2F2131%2FI%2F252%2F597%2FlrgscaleIMG_9723.JPEG&f=1&nofb=1",
      "InStock": false,
      "rating": {
      "rate": 3.2,
      "count": 25
      }
    },
    {
      "id": 4,
      "title": "Lenovo",
      "price": 65000.00,
      "description": "For the smart people",
      "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages1500x1500%2Flenovo_20ta004qus_thinkpad_e14_g2_i5_1135_1605846.jpg&f=1&nofb=1",
      "InStock": true,
      "rating": {
      "rate": 3.0,
      "count": 55
      }
    },
    {
      "id": 5,
      "title": "Asus",
      "price": 51000.00,
      "description": "the speed",
      "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aZKQzvD0G5S_uCjz-S4xRwHaHH%26pid%3DApi&f=1",
      "InStock": true,
      "rating": {
      "rate": 4.5,
      "count": 25
      }
    },
    
  ]
      priceRange: any[] = [
           { name: 'Under-20,000', value: 11000, checked: false },
           {name:  '20000-40000', value: 21000, checked: false },
           {name:  '40000-60000', value: 41000, checked: false },
           {name:  '60000-90000', value: 61000, checked: false },
     ];
     RatingRange = [

      {
        "title": "One star",
        "value": 1,
        checked: false 
      },
   
      {
        "title": "Two star",
        "value": 2,
        checked: false 
       },
   
      {
       "title": "Three star",
       "value": 3,
       checked: false 
      },
   
      {
       "title": "Four star",
        "value": 4,
        checked: false 
       }
   
    ];
  
  constructor(){}
  onclick(event:any, value:any, index:any){
 //event.isChecked = !event.isChecked;
 // this.isChecked = !this.isChecked;
 //this.isCheckedName = event.target.name;
     this.RatingRange[index].checked = true;
    if(event.target.checked){
      this.rate = value;
     }

    console.log(this.rate);
}
  onInputChange( event : any, value: any, index: any){
   // this.isChecked = !this.isChecked;
    //this.isCheckedName = event.target.name; 
    this.priceRange[index].checked = true;
    if(event.target.value){
      this.ice= value;
      console.log(this.ice);
    }
  
    
    
  }
  
 
}