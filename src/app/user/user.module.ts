import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { bodyRoutingModule } from '../body/bodyRouting.module';



@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    bodyRoutingModule
  ],
  exports:[
    SigninComponent,
  ]
})
export class UserModule { }
