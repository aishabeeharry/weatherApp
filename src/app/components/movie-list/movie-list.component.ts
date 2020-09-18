import {Component, Input, OnInit} from '@angular/core';
import Movie from '../../dto/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() {
  }

  ngOnInit() {
  }

  getBackground(photo: string) {
    return {
      "background" : `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      "height": "100px",
      "width": "150px",
    };
  }

}
