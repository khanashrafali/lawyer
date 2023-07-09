import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddressComponent } from './pages/address/address.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page500Component } from './pages/page500/page500.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsFilterListingComponent } from './pages/products-filter-listing/products-filter-listing.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AuthGuard } from './services/auth.guard';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './pages/refund-policy/refund-policy.component';

const routes: Routes = [
  { path: 'address', canActivate: [AuthGuard], component: AddressComponent },
  { path: 'products-listing', component: ProductsFilterListingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  {
    path: 'order-details/:orderId',
    canActivate: [AuthGuard],
    component: OrderDetailComponent,
  },
  {
    path: 'order-history',
    canActivate: [AuthGuard],
    component: OrderHistoryComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'brands', component: BrandComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'error', component: Page500Component },
  { path: 'pay', component: PaymentComponent },
  { path: 'order-placed', component: OrderPlacedComponent },
  { path: 'terms-condition', component: TermsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
