import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";


import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: 'login.component.html',
  exportAs: 'ngModel'
})
export class LoginComponent {
  username='';
  password='';
  constructor(private http: Http ) {}

  ChangeValue(field, val){
    if(field == 'username'){
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
