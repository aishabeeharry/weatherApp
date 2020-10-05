import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss']
})
export class LocaleComponent implements OnInit {

  @Input() localeArray: string[];
  @Input() selectedCode: any;
  @Output() language: EventEmitter<any>;

  constructor() {
    this.localeArray = [];
    this.selectedCode = null;
    this.language = new EventEmitter();
  }

  ngOnInit() {
  }

  selectItem(locale: string): void {
    this.selectedCode = locale;
    this.language.emit(locale);
  }
}
