import { NgModule} from "@angular/core";
import{Routes,RouterModule} from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from "./home/home.component";
import { UserModule } from "../user/user.module";
import { userRoutingModule } from "../user/userRouting.module";
import { SigninComponent } from "../user/signin/signin.component";

const routes: Routes = [
 {path:'',component:HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'items', component: ItemsComponent},
  {path:'user', children:[{path:'signin', component:SigninComponent}] }
];

@NgModule({
  imports: [RouterModule.forChild(routes), userRoutingModule],
  exports: [RouterModule]
})
export class bodyRoutingModule{ }
