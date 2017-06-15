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
import { UploadComponent } from "app/subapp/upload/upload.component";
import { StatisticsComponent } from "app/subapp/statistics/statistics.component";
const appRoutes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   canLoad: []
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
  // }, UploadComponent
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
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
