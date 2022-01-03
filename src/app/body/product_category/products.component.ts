import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 category:any;

  products_category=[{
    "id": 1,
      "category": "Electronics",
      "description": "Enjoy your HP experience",
      "image": "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    },
    {
      "id": 2,
        "category": "Fitness Needs",
        "description": "Enjoy your HP experience",
        "image": "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",

    },
    {
      "id": 3,
        "category": "Pet Supplies",
        "description": "Enjoy your HP experience",
        "image": "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg",

    },
    {
      "id": 4,
        "category": "Bags",
        "description": "Enjoy your HP experience",
        "image": "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/HeroBanners/EpicDailyDealsLP/Fuji_DB_EDD_1X._SY304_CB650761022_.jpg",

    },
    {
      "id": 5,
        "category": "toys",
        "description": "Enjoy your HP experience",
        "image": "https://m.media-amazon.com/images/I/81-RlWFdRrL._AC_SY200_.jpg",

    }
]

  constructor(private _activatedRoute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {}
  goTo(){
    this._router.navigate(['/items']);
  }
}
