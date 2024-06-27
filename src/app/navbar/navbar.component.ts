import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = true;

  langList = [
    {
      name: 'English',
      key: 'en'
    },
    {
      name: 'Español',
      key: 'es'
    }
  ];

  filteredList;
  selectedLang;

  @Input()
  langKey: string;

  @Output()
  newLangSelected: EventEmitter<object> = new EventEmitter<object>();

  constructor(private observer: BreakpointObserver, private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.getNavbarData()
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedLang = this.langList.find(o => o.key === changes.langKey.currentValue)
    this.filteredList = this.langList.filter(o => o.key !== changes.langKey.currentValue)
  }

  items;

  getNavbarData() {
    // TODO: Add loader
    this.items = this.navbarService.getData(this.langKey)
      .subscribe(
        (response) => {
          const { navbar_items } = response
          this.items = navbar_items
          console.log('this.items: ', this.items)
        }
      );
  }

  selectLang(lang: Record<string, string>): void {
    this.langKey = lang.key
    this.getNavbarData()
    this.newLangSelected.emit(lang)
  }
}
