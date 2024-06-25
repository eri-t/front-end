import { Component, OnInit } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  
  ngOnInit(): void {
    this.lang = 'en';
    this.getHomeData()
  }

  lang;

  homeSections;

  getHomeData() {
    // TODO: Add loader
    this.homeSections = this.homeService.getData(this.lang)
    .subscribe(
      (response) => {
        this.homeSections = Object.values(response)
        console.log('this.homeSections: ',this.homeSections)
      }
    );
  }

  handleLangChange(lang: Record<string, string>): void {
    this.lang = lang.key
    this.getHomeData()
  }
}
