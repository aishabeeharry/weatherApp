import {Component, OnInit} from '@angular/core';
import {Configurations} from '../../config/configurations';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  showDropdown: boolean;
  public languages: string[];
  public currentLanguage: string;

  constructor(private _translateService: TranslateService) {
    this.showDropdown = false;
    this.languages = Configurations.SUPPORTED_LANGUAGE;
    this.currentLanguage = this._translateService.currentLang;
  }

  ngOnInit() {
  }

  toggleList() {
    this.showDropdown = !this.showDropdown;
  }

  changeLanguage(locale: string) {
    this._translateService.use(locale);
  }

}
