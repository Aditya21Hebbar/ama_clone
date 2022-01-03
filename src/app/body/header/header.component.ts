import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentMsgToSibling =" ";
  filteredString: any = '';
  @Output() msgToSibling = new EventEmitter<any>();
  constructor(private _activatedRoute: ActivatedRoute,private _router: Router) { }

  onCartButtonClick():void{
    this._router.navigate(['/cart']);
  }

  ngOnInit(): void {
  }
  onSigninButtonClick() : void{
    this._router.navigate(['/signin']);
  }
msgToSib(){
  this.msgToSibling.emit(this.currentMsgToSibling)}
}

