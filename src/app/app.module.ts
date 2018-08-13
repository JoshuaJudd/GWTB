import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BakingTipsComponent } from './baking-tips/baking-tips.component';
import { ProductComponent } from './product/product.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';
import { EmailOrdersComponent } from './email-orders/email-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BakingTipsComponent,
    ProductComponent,
    ContactUsFormComponent,
    HeaderComponent,
    HomeComponent,
    EmailOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
