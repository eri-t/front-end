import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utils/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingComponent } from './utils/rating/rating.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './app.service';
import { environment } from 'src/environments/environment.development';
import { ApiUrlPipe } from './api-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    NavbarComponent,
    RatingComponent,
    LifeCycleComponent,
    SimpleCardComponent,
    ApiUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    },
    {
      provide: "BASE_API_URL", useValue: environment.apiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
