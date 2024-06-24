import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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

  selectLang(lang: object): void {
    this.newLangSelected.emit(lang)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedLang = this.langList.find(o => o.key === changes.langKey.currentValue)
    this.filteredList = this.langList.filter(o => o.key !== changes.langKey.currentValue)
  }
}
