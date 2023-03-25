import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() bannerImage?: string;
  @Input() style?: any;
  @Input() h4?: string;
  @Input() h2?: string;
  @Input() span?: string;
  @Input() button?: boolean;
  @Input() buttonText?: string;
}
