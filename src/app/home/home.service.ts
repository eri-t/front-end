import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  public getData() {
    return this.http.get<any>('/api/home').subscribe(config => {
      // process the configuration.
      console.log({ config })
    });
  }
}
