import { Component, OnInit } from '@angular/core';
import { AdminService } from  './../shared/services/admin.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username= '';
  password= '';
  constructor(
    private service: AdminService
  ) { }

  ngOnInit() {
  }

  ChangeValue(field, val){
    if (field === 'username'){
      this.username = val;
    } else {
      this.password = val;
    }
  }

  login() {
    this.service.login(this.username, this.password);
  }
}
