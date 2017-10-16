import {Component, Injectable, OnInit} from '@angular/core';
import { Resolve, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Http} from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  constructor( private router: Router, private http: Http ) { }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}


  checkLogin(){
    const aUser = JSON.parse(localStorage.getItem('adminUser'));
    if(aUser && aUser['_id']){
      return (aUser && aUser['_id']) ? aUser : aUser;
    } else {
      return false;
    }
  }

  logout() {
    this.http.delete('http://37.59.126.66:3000/doc/api-doc.json')
    localStorage.removeItem('adminUser'),
      this.router.navigate(['login']);
  }

}

@Injectable()
export class isAuthentication implements CanActivate {

  constructor(private dashboard: FullLayoutComponent, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.dashboard.checkLogin();
    if (!user && !user._id) {
      return Observable.of(true);
    } else {
      return Observable.of(false);
    }
  }
}
