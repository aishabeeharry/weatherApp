import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../providers/login.service';
import {set} from '../utils/local-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private  _loginService: LoginService) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  loginUser() {
    this._loginService.login().subscribe(response => {
        console.log(response);
        set('USER_ID', this.username);
        set('USER_TOKEN', response.request_token);
        set('AUTHENTICATED', response.success);
        this.router.navigateByUrl('/upcoming');
      },
      error => {
        console.log(error);
      });
  }
}
