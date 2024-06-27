import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  public getData(lang: string) {
    const query = `/api/navbar?populate[navbar_items][populate][0]=navbar_sub_items&locale[0]=${lang}`
    return this.http.get<any>(query)
  }

}
