import { Component } from '@angular/core';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FeaturedProductsService } from './services/featured-products.service';
import { FeaturesService } from './services/features.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce-website-2';
  features: any;
  featuredProducts: any;

  constructor(
    private featuresService: FeaturesService,
    private featuredProductsService: FeaturedProductsService
  ) {}

  ngOnInit() {
    this.featuresService.getJSON().subscribe((data) => {
      this.features = data;
    });
    this.featuredProductsService.getJSON().subscribe((data) => {
      this.featuredProducts = data;
    });
  }
}
