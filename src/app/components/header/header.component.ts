import { Component, Input } from '@angular/core';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faBagShopping = faBagShopping;
  headerRouteTitles: any;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.getJSON().subscribe((data) => {
      this.headerRouteTitles = data;
    });
  }
}
