import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {DetailsComponent} from './components/details/details.component';
import {FormsModule} from '@angular/forms';
import {SidemenuComponent} from './components/sidemenu/sidemenu.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {AppRoutingModule} from './app-routing.module';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    SidemenuComponent,
    CheckboxComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
