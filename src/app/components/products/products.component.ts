import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  faStar = faStar;
  faShopingCart = faShoppingCart;
  @Input() ProductImage: any;
  @Input() ProductTitle: any;
  @Input() ProductBrand: any;
  @Input() ProductPrice: any;
  @Input() ProductRatings: any;
}
