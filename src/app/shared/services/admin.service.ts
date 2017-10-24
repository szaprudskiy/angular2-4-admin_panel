import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Http} from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AdminService {
  User;

  constructor(
    private http: Http,
    private router: Router,
    private _service: NotificationsService
  ) { }

  login(username, password){
    this.http.post('admin/login', { username: username, password: password })
      .toPromise()
      .then(response => {
        let data = JSON.parse(response['_body']);
        if(data.success){
          this.User = data.data;
          localStorage.setItem('adminUser', JSON.stringify(this.User));
          this.router.navigate(['']);
        } else {
          let message = data.error;
          this._service.error(
            'Error!',
            message,
            {
              timeOut: 5000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: true,
              maxLength: 100
            }
          );
        }
      })
      .catch(error =>{
        let err = JSON.parse(error);
        this._service.error(
          'Error!',
          (err.error) ? err.error : err,
          {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 100
          }
        );
      });
  }

  checkLogin() {
    if(typeof localStorage !== 'undefined'){
      let User = JSON.parse(localStorage.getItem('adminUser'));
      if(User && User['_id']){
        return User;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

@Injectable()
export class IsAuthentication implements CanActivate {

  constructor(
    private service:AdminService,
    private router:Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let user = this.service.checkLogin();
    if(user && user._id){
      return Observable.of(true);
    } else {
      this.router.navigate(['/login']);
    }
  }

}

@Injectable()
export class NotAuthentication implements CanActivate {

  constructor(
    private service:AdminService,
    private router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ){
    let user = this.service.checkLogin();
    if(!user || !user._id){
      return Observable.of(true);
    } else {
      this.router.navigate(['/']);
    }
  }

}
