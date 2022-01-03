import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './product_category/products.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { UserModule } from '../user/user.module';
// import { SigninComponent } from '../user/signin/signin.component';
// import { SigninComponent } from '../user/signin/signin.component';
import { bodyRoutingModule } from './bodyRouting.module';
@NgModule({
  declarations: [
    CartComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    BannerComponent,
    PageNotFoundComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserModule,
    //bodyRoutingModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ItemsComponent,
    ProductsComponent,
  ]
})
export class BodyModule { }
