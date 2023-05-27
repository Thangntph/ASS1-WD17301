import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout/base-layout.component';
import { ProductEditComponent } from './pages/product-edit/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';
import { PageNotFoundComponent } from './pages/page-not-foud/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product/admin-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomepageComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    ProductEditComponent,
    ProductAddComponent,
    PageNotFoundComponent,
    HomePageComponent,
    DashboardComponent,
    AdminProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
