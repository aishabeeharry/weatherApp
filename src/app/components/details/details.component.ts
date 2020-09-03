import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  value: any;
  @Input() valueSelected: any;
  @Output() emitValue = new EventEmitter<any>();

  constructor() {
    this.value = this.valueSelected;
    this.emitValue = new EventEmitter<any>();
  }

  ngOnInit() {
    this.value = this.valueSelected;
  }

  onValueInput() {
    this.emitValue.emit(this.value);
  }
}
