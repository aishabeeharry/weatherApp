import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from '../providers/login.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this._loginService.isAuthenticated()
      .pipe(map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true;
        } else {
          this._router.navigate(['/login']).then(() => {
          });
          return false;
        }
      }));
  }

}
