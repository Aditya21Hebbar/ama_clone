import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import{ Input} from '@angular/core';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
   items=[
     {
       'category':'Electronics',
        'title': 'Oculus Quest',
        'price': '$299',
        'image' : 'https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL480_QL65_.jpg'
     },
     {
      'category':'Electronics',
       'title': 'Nintendo Switch',
       'price': '$249',
       'image':'https://m.media-amazon.com/images/I/31Zm5UaF-sL._AC_UL480_QL65_.jpg'
      },
    {
      'category':'Electronics',
       'title': 'Xbox Series S',
       'price': '$349',
       'image' : 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL480_QL65_.jpg'
    },
    {
      'category':'Electronics',
       'title': 'Wireless Controller',
       'price': '$69',
       'image' : 'https://m.media-amazon.com/images/I/612bjwBuobS._AC_UL480_QL65_.jpg'
    },
    {
      'category':'Electronics',
       'title': 'SanDisk 128GB',
       'price': '$10',
       'image' : 'https://m.media-amazon.com/images/I/810o-i5jpiL._AC_UL480_QL65_.jpg'
    },
  ]
  constructor(private route:ActivatedRoute,private router:Router) { }
  @Input() category = ''; //decorating the property with @input()
  ngOnInit(): void {
  }
  addToCart(item : any){

  }

}
