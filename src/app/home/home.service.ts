import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  public getData(lang: string) {
    const query = `/api/home?populate[home_how_section][populate][home_hows][populate][0]=Image&populate[home_tech_section][populate][home_technologies][populate][0]=Image&locale[0]=${lang}`
    return this.http.get<any>(query)
  }

}
