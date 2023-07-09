import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingModule } from 'angular-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page500Component } from './pages/page500/page500.component';
import { ProductsFilterListingComponent } from './pages/products-filter-listing/products-filter-listing.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncludeModule } from './includes/include.module';
import { ProductDetailModule } from './pages/product-detail/product-detail.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { MaterialModule } from './shared/material.module';
import { InputErrorModule } from './shared/input-error/input-error.module';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './pages/payment/payment.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AddressComponent } from './pages/address/address.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { AppService } from './services/app.service';
import { WishItemModule } from './components/wish-item/wish-item.module';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { ProductItemModule } from './components/product-item/product-item.module';
import { CartService } from './services/cart.service';
import { PaginationModule } from './shared/pagination/pagination.module';
import { BrandComponent } from './pages/brand/brand.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoriesComponent,
    ChangePasswordComponent,
    CheckoutComponent,
    EditProfileComponent,
    LoginComponent,
    OrderHistoryComponent,
    WishlistComponent,
    AboutComponent,
    ContactUsComponent,
    ProductsFilterListingComponent,
    Page404Component,
    Page500Component,
    PaymentComponent,
    AddressComponent,
    OrderPlacedComponent,
    OrderDetailComponent,
    BrandComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    IncludeModule,
    WelcomeModule,
    ProductDetailModule,
    InputErrorModule,
    WishItemModule,
    ProductItemModule,
    PaginationModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    StarRatingModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [AppService, CartService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
