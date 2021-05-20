import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { ManageCustomerComponent } from './customers/manage-customer/manage-customer.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ManageProductComponent } from './products/manage-product/manage-product.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'customer', component: CustomerComponent, children: [
      { path: 'list', component: CustomerListComponent },
      { path: 'manage/:id/:name', component: ManageCustomerComponent }
    ]
  },
  {
    path: 'product', component: ProductComponent, children: [
      { path: 'list', component: ProductListComponent },
      { path: 'manage/:id', component: ManageProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
