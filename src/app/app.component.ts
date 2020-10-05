import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Configurations} from './config/configurations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherApp';

  constructor(private _translateService: TranslateService) {
    this.setLanguage();
  }

  /**
   * Set application language to browser selected language.
   * If language is not supported, english is used as default.
   */
  private setLanguage(): void {
    const browserLanguage = this._translateService.getBrowserLang();

    if (Configurations.SUPPORTED_LANGUAGE.includes(browserLanguage)) {
      this._translateService.use(browserLanguage);
    } else {
      this._translateService.use(Configurations.DEFAULT_LOCALE);
    }
  }
}
