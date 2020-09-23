import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {NgModule} from '@angular/core';
import {MovieListComponent} from './components/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      {path: '', redirectTo: 'upcoming', pathMatch: 'full'},
      {
        path: 'upcoming', children: [
          {path: '', component: MovieListComponent},
          {
            path: ':id', children: [
              {path: '', component: MovieDetailsComponent},
            ]
          }
        ]
      },
      {
        path: 'popular', children: [
          {path: '', component: MovieListComponent},
          {
            path: ':id', children: [
              {path: '', component: MovieDetailsComponent},
            ]
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
