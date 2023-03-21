import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent {
  faStar = faStar;
  faShopingCart = faShoppingCart;
  @Input() featuredProductImage: any;
  @Input() featuredProductTitle: any;
  @Input() featuredProductBrand: any;
  @Input() featuredProductPrice: any;
  @Input() featuredProductRatings: any;
}
