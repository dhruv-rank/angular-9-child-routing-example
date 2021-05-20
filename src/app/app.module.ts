import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { ManageProductComponent } from './products/manage-product/manage-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { ManageCustomerComponent } from './customers/manage-customer/manage-customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ManageProductComponent,
    ProductListComponent,
    CustomerComponent,
    ManageCustomerComponent,
    CustomerListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
