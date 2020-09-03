import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  selectedName: string;

  constructor() {
    this.selectedName = '';
  }

  ngOnInit() {
  }

  onSelected(selected: string) {
    this.selectedName = selected;
  }
}
