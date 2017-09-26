import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor() {}

  // login(username, password) {
  //   return this.http.post('/api/admin/login', { username: username, password: password })
  //     .map((response: Response) => {
  //       this.User = response.json().data;
  //       if (this.User && this.User.token) {
  //         localStorage.setItem('adminUser', JSON.stringify(this.User));
  //         location.href = '/brand-dashboard';
  //       }
  //       return this.User;
  //     });
  // }

  

}
