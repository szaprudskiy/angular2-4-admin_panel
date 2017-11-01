import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Http} from '@angular/http';
import {NotificationsService} from 'angular2-notifications/dist';


@Injectable()
export class BrandService {

  constructor(
    private http: Http,
    private router: Router,
    private _service: NotificationsService
  ) { }

  getBrands(count=20, offset=0){
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
        .catch(error => {
          let err = JSON.parse(error);
          console.error('brand-list: ', err);
          this.router.navigate(['500']);
        });
    });

  }

  getBrand(id) {
    return new Promise((res, rej) => {
     return this.http.get('brand/' + id)
        .toPromise()
        .then(response => {
          let data = JSON.parse(response['_body']);
          if(data.success){
            res(data.data);
          } else {
            console.error('brand-edit: ', data.error, data.system);
            this.router.navigate(['500']);
          }
        })
        .catch(error => {
          let err = JSON.parse(error);
          console.error('brand-edit: ', err);
          this.router.navigate(['500']);
        });
    });

  }


  update(id, data) {
    console.log('test ', id, data);
      return new Promise((res) => {
        return this.http.put('brand/' + id, data )
          .toPromise()
          .then(response => {
            data = JSON.parse(response['_body']);
            if(data.success){
              res(data.data)
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
            .catch(error => {
            let err = JSON.parse(error)
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
          })
      })
  }


  // brandConfirmed(id, confirm) {
  //   return this.http.put('brand/confirmed/' + id);
  //   if ( confirm == 0 ){
  //     return 1
  //   }else{
  //     return 0;
  //   }
  // }
}
