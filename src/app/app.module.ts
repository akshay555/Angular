import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/app.customer.module';
import { sharedModule   } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule ,
    sharedModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
