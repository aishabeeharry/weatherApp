import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {DetailsComponent} from './components/details/details.component';
import {FormsModule} from '@angular/forms';
import {SidemenuComponent} from './components/sidemenu/sidemenu.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {AppRoutingModule} from './app-routing.module';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {LoginComponent} from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LocaleComponent } from './components/locale/locale.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    LoginComponent,
    SettingsComponent,
    LocaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
