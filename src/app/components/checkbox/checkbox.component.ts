import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked: boolean;
  @Input() label: string;
  @Output() checkChanged: EventEmitter<any>;

  constructor() {
    this.checkChanged = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  toggleChecked() {
    this.checked = !this.checked;
    this.checkChanged.emit(this.checkChanged);
  }
}
