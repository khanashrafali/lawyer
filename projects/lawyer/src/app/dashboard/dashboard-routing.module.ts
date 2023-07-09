import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      // { path: "", component: WelcomeComponent },
      { path: '', redirectTo: 'case-management', pathMatch: 'full' },
      // {
      //   path: "categories",
      //   loadChildren: () =>
      //     import("./categories/categories.module").then((m) => m.CategoriesModule),
      // },

      // {
      //   path: "products",
      //   loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule),
      // },

      {
        path: 'law-firm',
        loadChildren: () => import('./law-firm/law-firm.module').then((m) => m.LawFirmModule),
      },

      {
        path: 'role-access',
        loadChildren: () => import('./role-access/role-access.module').then((m) => m.RoleAccessModule),
      },
      {
        path: 'lawyer',
        loadChildren: () => import('./lawyer/lawyer.module').then((m) => m.LawyerModule),
      },
      {
        path: 'case-management',
        loadChildren: () => import('./case-management/case-management.module').then((m) => m.CaseManagementModule),
      },

      // {
      //   path: "users",
      //   loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
      // },
      // {
      //   path: "orders",
      //   loadChildren: () => import("./orders/orders.module").then((m) => m.OrdersModule),
      // },

      // {
      //   path: "uploadProducts",
      //   component: UploadProductsComponent,
      // },
      // {
      //   path: "slider",
      //   loadChildren: () => import("./slider/slider.module").then((m) => m.SliderModule),
      // },
      // {
      //   path: "payouts",
      //   loadChildren: () =>
      //     import("./transaction/transaction.module").then((m) => m.TransactionModule),
      // },
      // {
      //   path: "content",
      //   loadChildren: () => import("./content/content.module").then((m) => m.ContentModule),
      // },
      // {
      //   path: "brands",
      //   loadChildren: () => import("./brands/brands.module").then((m) => m.BrandsModule),
      // },
      // {
      //   path: "ads",
      //   loadChildren: () => import("./advertise/advertise.module").then((m) => m.AdvertiseModule),
      // },
      // {
      //   path: "contact-users",
      //   loadChildren: () =>
      //     import("./contact-users/contact-users.module").then((m) => m.ContactUsersModule),
      // },
      // {
      //   path: "user-feedbacks",
      //   loadChildren: () =>
      //     import("./user-feedback/user-feedback.module").then((m) => m.UserFeedbackModule),
      // },
      // {
      //   path: "category-heading",
      //   loadChildren: () =>
      //     import("./category-heading/category-heading.module").then((m) => m.CategoryHeadingModule),
      // },
      // {
      //   path: "coupon-code",
      //   loadChildren: () =>
      //     import("./coupon-code/coupon-code.module").then((m) => m.CouponCodeModule),
      // },
      // {
      //   path: "service-charge",
      //   loadChildren: () =>
      //     import("./service-charge/service-charge.module").then((m) => m.ServiceChargeModule),
      // },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
