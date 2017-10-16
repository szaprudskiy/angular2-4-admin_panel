import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Http} from '@angular/http';

@Injectable()
export class BrandService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  getBrands(count=10, offset=0){
    let url = 'brand/list?count=' + count + '&offset=' + offset;
    return new Promise((res, rej) =>{
      this.http.get(url)
        .toPromise()
        .then(response => {
          let data = JSON.parse(response['_body']);
          if(data.success){
            res(data.data);
          } else {
            console.error('brand-list: ', data.error, data.system);
            this.router.navigate(['500']);
          }
        })
        .catch(error =>{
          let err = JSON.parse(error);
          console.error('brand-list: ', err);
          this.router.navigate(['500']);
        });
    });

  }
}
