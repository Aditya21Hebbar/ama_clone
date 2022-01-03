import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private _activatedRoute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
  }
  signIn(){
    this._router.navigate(['/signin']);
  }

}

