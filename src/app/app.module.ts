import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderAddComponent } from './orders/order-add/order-add.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OrderUpdateComponent } from './orders/order-update/order-update.component';
import { LoginComponent } from 'src/app/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter'
import { FlexLayoutModule  } from "@angular/flex-layout";
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NavbarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerUpdateComponent,
    CustomerAddComponent,
    OrdersListComponent,
    OrderAddComponent,
    OrderDetailComponent,
    OrderUpdateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
