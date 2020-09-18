import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../providers/movies.service';
import Movie from '../../dto/movie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  list: any[];
  displayValue: any;
  isChecked: boolean;
  label: string;


  movies: Movie[];
  // title: string;
  movieList: Movie[];

  constructor(private _moviesService: MoviesService) {
    // this.title = 'Weather App';
    this.list = [];
    this.displayValue = '';
    this.isChecked = false;
    this.movies = [];
    this.movieList = [];
  }

  ngOnInit() {
    this.list = [{id: 0, name: 'Port-Louis', temperature: 35.1},
      {id: 1, name: 'London', temperature: 4},
      {id: 2, name: 'Abu dhabi', temperature: 18},
      {id: 2, name: 'Rome', temperature: 7},
      {id: 2, name: 'Paris', temperature: -1}];
    this.displayValue = 'hello world!';
    this.isChecked = false;
    this.label = 'Remember Me';
    // this.getMovies();
  }

  onValueEmitted(valueEmitted: any) {
    this.displayValue = valueEmitted;
  }

  rememberMe(check: boolean) {
    this.isChecked = check;
  }

  getMovies() {
    this._moviesService.getMoviesList().subscribe((data: any) => {
      console.log(data);

      data.forEach((element: any) => {
        const movie: Movie = new Movie();
        movie.title = element.title;
        movie.contentRating = element.contentRating;
        this.movies.push(movie);
      });
    });
  }

  getPopularMovies() {
    this._moviesService.fetchPopularMovies().subscribe(() => {
      this.movieList = this._moviesService.movieList;
    });
  }

  getUpcomingMovies() {
    this._moviesService.fetchUpcomingMovies().subscribe(() => {
      this.movieList = this._moviesService.movieList;
    });
  }

  selectMenu(id: number) {
    if (id === 0) {
      this.getUpcomingMovies();
    } else {
      this.getPopularMovies();
    }
  }
}
