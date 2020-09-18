import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus: any[];
  @Output() selectedMenu: EventEmitter<number>;

  constructor() {
    this.menus = [{id: 0, name: 'Upcoming Movies'}, {id: 1, name: 'Popular Movies'}];
    this.selectedMenu = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  selectMenu(id: number) {
    this.selectedMenu.emit(id);
  }
}
