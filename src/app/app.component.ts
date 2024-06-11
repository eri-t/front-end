import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.showingMovies = [
        {
          title: 'Spider-Man',
          launchDate: new Date(),
          price: 1400.99
        },
        {
          title: 'Moana',
          launchDate: new Date("2016-11-14"),
          price: 1230.99
        }
      ];
      this.nextMovies = [
        /*
        {
          title: 'Spider-Man Far from home',
          launchDate: new Date("2024-12-24"),
          price: 1900.99
        },
        {
          title: 'Inception',
          launchDate: new Date("2025-8-25"),
          price: 1800.99
        },
        {
          title: 'Rocky',
          launchDate: new Date("2025-7-12"),
          price: 1700.99
        }
          */
      ]
    }, 3000);
  }
  title = 'front-end';
  showingMovies;
  nextMovies;

  doubleNumber(value:number):number {
    return value*2
  }
}
