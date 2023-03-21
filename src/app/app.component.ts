import { Component } from '@angular/core';
import { FeaturesService } from './services/features.service';
import { ProductsService } from './services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce-website-2';
  features: any;
  featuredProducts: any;
  newArrivals: any;

  constructor(
    private featuresService: FeaturesService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.featuresService.getJSON().subscribe((data) => {
      this.features = data;
    });
    this.productsService.getFeaturedProducts().subscribe((data) => {
      this.featuredProducts = data;
    });
    this.productsService.getNewArrivals().subscribe((data) => {
      this.newArrivals = data;
    });
  }
}
