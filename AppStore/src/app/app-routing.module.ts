import { ProductListComponent } from './subapp/product-list/product-list.component';
import { ProductDetailComponent } from './subapp/product-detail/product-detail.component';
import { HomeComponent } from './subapp/home/home.component';
import { MembersComponent } from 'app/auth/members/members.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { AuthGuard } from 'app/services/auth.service';
import { DashboardComponent } from "app/subapp/dashboard/dashboard.component";
const appRoutes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   canLoad: []
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
  // },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'employee',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'app/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'apps', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'apps/category/:category', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'apps/range/:start/:end', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
