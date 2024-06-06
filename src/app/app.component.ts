import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  movies = [
    {
      title: 'Spider-Man',
      launchDate: new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      launchDate: new Date(2016-11-14),
      price: 1230.99
    },
    {
      title: 'Spider-Man 2',
      launchDate: new Date(2021-6-29),
      price: 1400.99
    }
  ]

  doubleNumber(value:number):number {
    return value*2
  }
}
