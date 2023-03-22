import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { faBagShopping, faOutdent } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('navbarRef') navbarRef!: ElementRef;
  @ViewChild('barRef') barRef!: ElementRef;
  faBagShopping = faBagShopping;
  faOutdent = faOutdent;
  headerRouteTitles: any;

  constructor(
    private headerService: HeaderService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.headerService.getJSON().subscribe((data) => {
      this.headerRouteTitles = data;
    });
  }
  ngAfterViewInit() {
    const bar = this.barRef.nativeElement;
    const navbar = this.navbarRef.nativeElement;

    if (bar) {
      console.log('bar click');
      this.renderer.listen(bar, 'click', () => {
        this.renderer.addClass(navbar, 'active');
      });
    }
  }
}
