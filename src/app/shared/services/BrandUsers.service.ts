///<reference path="../models/BrandUser.model.ts"/>
import {Injectable} from '@angular/core';
import { BrandUser } from '../models/BrandUser.model';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class BrandUsersService {
  constructor(private http: Http){}

    BrandSignUp(company: string, email: string, name: string, password: string, phone: number){
      this.http.post('http://37.59.126.66:3000/doc/api-doc.json/brand/signup', {company, email, name, password, phone})
        .map((response: Response) => response.json());
    }

    getBrandList() {
      this.http.get('http://37.59.126.66:3000/doc/api-doc.json/brand/list')
        .map(res => res.json());
    }

  editBrandInfo(company: string, email: string, name: string, password: string, phone: number) {
      this.http.put('http://37.59.126.66:3000/doc/api-doc.json/brand/{brandId}', {company, email, name, password, phone})
        .map((response: Response) => response.json());
  }

  confirmBrand(confirm: boolean) {
    this.http.put('http://37.59.126.66:3000/doc/api-doc.json/brand/confirmed{brandId}', {confirm})
      .map((response: Response) => response.json());
  }



}




// @Injectable()
// export class notAuthentication implements CanActivate {
//
//   constructor(private service: BrandUsersService, private router: Router){}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//     const user = this.service.checkLogin();
//     if(user && user._id){
//       return Observable.of(true);
//     } else {
//       return Observable.of(false);
//     }
//   }
// }
