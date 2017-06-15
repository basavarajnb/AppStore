import { MembersComponent } from 'app/auth/members/members.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { ProductListService } from './subapp/product-list/services/product-list.service';
import { ProductsFilterComponent } from './subapp/product-list/componets/products-filter/products-filter.component';
import { ProductListComponent } from './subapp/product-list/product-list.component';
import { ProductDetailService } from './subapp/product-detail/services/product-detail.service';
import { ProductDetailComponent } from 'app/subapp/product-detail/product-detail.component';
import { HomeComponent } from './subapp/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';

import { ControlsModule } from './controls/controls.module';
import { SideNavbarService } from 'app/subapp/side-navbar.service';
import { UserAuthService } from 'app/services/user.service';
import { AuthGuard } from 'app/services/auth.service';
import { DashboardComponent } from './subapp/dashboard/dashboard.component';
import { FileService } from "app/services/file.service";
import { AppListComponent } from './subapp/app-list/app-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductsFilterComponent,
    LoginComponent,
    MembersComponent,
    DashboardComponent,
    AppListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule,
    AppRoutingModule
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SideNavbarService, UserAuthService, AuthGuard, ProductDetailService, ProductListService,
    FileService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
