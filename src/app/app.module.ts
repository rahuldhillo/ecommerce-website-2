import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, FeaturesComponent, FeaturedProductsComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
