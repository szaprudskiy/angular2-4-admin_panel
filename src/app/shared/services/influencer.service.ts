import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Http} from '@angular/http';
import {NotificationsService} from 'angular2-notifications/dist';

@Injectable()
export class InfluencerService {

  constructor(
    private http: Http,
    private router: Router,
    private _service: NotificationsService
  ) { }

  getInfluencers(count=10, offset=0){
    let url = 'influencer/list?count=' + count + '&offset=' + offset;
    return new Promise((res, rej) =>{
      this.http.get(url)
        .toPromise()
        .then(response => {
          let data = JSON.parse(response['_body']);
          if(data.success){
            res(data.data);
          } else {
            console.error('influencer-list: ', data.error, data.system);
            this.router.navigate(['500']);
          }
        })
        .catch(error =>{
          let err = JSON.parse(error);
          console.error('influencer-list: ', err);
          this.router.navigate(['500']);
        });
    });

  }

  getInfluencer(id) {
    return new Promise((res, rej) => {
      return this.http.get('influencer/' + id)
        .toPromise()
        .then(response => {
          let data = JSON.parse(response['_body']);
          if(data.success){
            res(data.data);
          } else {
            console.error('influencer-edit: ', data.error, data.system);
            this.router.navigate(['500']);
          }
        })
        .catch(error => {
          let err = JSON.parse(error);
          console.error('influencer-edit: ', err);
          this.router.navigate(['500']);
        });
    });

  }


  update(id, data) {
    console.log('test ', id, data);
    return new Promise((res) => {
      return this.http.put('influencer/' + id, data )
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

}
