import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../providers/movies.service';
import Movie from '../../dto/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: any;
  movie: Movie;

  constructor(private _route: ActivatedRoute, private  _movieService: MoviesService) {
    this.movie = new Movie();
    this.movieId = this._route.snapshot.paramMap.get('id');
    console.log(this.movieId);
    this.getMovieById();
  }

  ngOnInit() {
  }

  getMovieById() {
    this._movieService.fetchMovieById(this.movieId).subscribe(() => {
      this.movie = this._movieService.movie;
    });
  }

}
