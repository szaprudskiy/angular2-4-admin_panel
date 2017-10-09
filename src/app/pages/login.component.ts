import {Component, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';


import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  exportAs: 'ngModel'
})
export class LoginComponent implements OnInit{

  username= '';
  password= '';
  constructor(private http: Http, router: Router ) {}

  ngOnInit(){
     // this.router.navigate(['/dashboard']);
  }

  ChangeValue(field, val){
    if (field === 'username'){
      this.username = val;
    } else {
      this.password = val;
    }
  }

  login() {
    return this.http
    .post('http://37.59.126.66:3000/api/admin/login',
    JSON.stringify({ username: this.username, password: this.password }), this.defaultRequestOptions())
    .toPromise()
    .then(res => {
      console.log('res: ', res);
      const User = res.json().data;
          if (User && User.token) {
            localStorage.setItem('adminUser', JSON.stringify(User));
             location.href = '/dashboard';
          }
          return User;
    })
    .catch(err => {
      console.log('err: ', err);
    })

    // return this.http.post('/api/admin/login', { username: this.username, password: this.password })
    //   .map((response: Response) => {
    //     console.log('test: ', response);
    //     let User = response.json().data;
    //     if (User && User.token) {
    //       localStorage.setItem('adminUser', JSON.stringify(User));
    //       // location.href = '/brand-dashboard';
    //     }
    //     return User;
    //   });
  }

  defaultRequestOptions() {
    const token = localStorage.getItem('AdminUser');

    if (token !== null) {
      return new RequestOptions({
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Admin ' + JSON.parse(token),
        }),
      });
    }
    return new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  }

}
