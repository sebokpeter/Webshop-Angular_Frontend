import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderAddComponent } from './orders/order-add/order-add.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OrderUpdateComponent } from './orders/order-update/order-update.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:id', component: CustomerDetailComponent},
  {path: 'customer-update/:id', component: CustomerUpdateComponent},
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'orders', component: OrdersListComponent},
  {path: 'order-add', component: OrderAddComponent},
  {path: 'orders/:id', component: OrderDetailComponent},
  {path: 'order-update/:id', component: OrderUpdateComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
