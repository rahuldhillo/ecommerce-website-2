import { Component } from '@angular/core';
import { FeaturesService } from './services/features.service';
import { ProductsService } from './services/products.service';
import {
  faTwitter,
  faInstagramSquare,
  faFacebook,
  faPinterestP,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { BannerService } from './services/banner.service';
import { LocalizationService } from './internationalization/localization.service';

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
  banners: any;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagramSquare = faInstagramSquare;
  faPinterestP = faPinterestP;
  faYoutube = faYoutube;

  language: string = 'en-US';

  constructor(
    private featuresService: FeaturesService,
    private productsService: ProductsService,
    private bannerService: BannerService,
    private localizationService: LocalizationService
  ) {}

  get name(): string {
    return this.localizationService.translate('banner.world');
  }

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
    this.bannerService.getBanners().subscribe((data) => {
      this.banners = data;
    });
  }

  onSelect(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
    console.log(lang);
  }
}
