import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  faBagShopping,
  faOutdent,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('navbarRef') navbarRef!: ElementRef;
  @ViewChild('barRef') barRef!: ElementRef;
  headerRouteTitles: any;
  mediaQueryList!: MediaQueryList;
  showBar = false;
  faBagShopping = faBagShopping;
  faOutdent = faOutdent;
  faTimes = faTimes;

  constructor(
    private headerService: HeaderService,
    private renderer: Renderer2
  ) {
    this.mediaQueryList = window.matchMedia('(max-width: 799px)');
  }

  ngOnInit() {
    this.headerService.getJSON().subscribe((data) => {
      this.headerRouteTitles = data;
    });
  }

  /*  ngAfterViewInit() {
    const bar = this.barRef?.nativeElement;
    const navbar = this.navbarRef?.nativeElement;

    if (bar) {
      console.log('bar click');
      this.renderer.listen(bar, 'click', () => {
        this.renderer.addClass(navbar, 'active');
      });
    }
  }
*/

  onBarClick() {
    this.showBar = true;
    console.log('Click');
  }
}
