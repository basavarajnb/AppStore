import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from "@angular/material";
import { CollapseComponent } from './collapse/collapse.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from "@angular/router";
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    BannerComponent,
    SearchBarComponent,
    CollapseComponent,
    CardDeckComponent,
    SideNavbarComponent,
    ProductCardComponent,
    CategoryComponent
  ],
  exports: [
    MaterialModule,
    BannerComponent,
    SearchBarComponent,
    CollapseComponent,
    CardDeckComponent,
    SideNavbarComponent,
    CategoryComponent,
    ProductCardComponent
  ]
})
export class ControlsModule {
}
