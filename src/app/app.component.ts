import { Component } from '@angular/core';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FeaturesService } from './services/features.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecommerce-website-2';
  features: any;
  faBagShopping = faBagShopping;

  constructor(private featuresService: FeaturesService) {}

  ngOnInit() {
    this.featuresService.getJSON().subscribe((data) => {
      this.features = data;
    });
  }
}
