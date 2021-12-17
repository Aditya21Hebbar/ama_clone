import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { PricefilterPipe } from './pricefilter.pipe';
import { SortProductcomponentComponent } from './sort-productcomponent/sort-productcomponent.component';
import { RatingPipe } from './rating.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PricefilterPipe,
    SortProductcomponentComponent,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
