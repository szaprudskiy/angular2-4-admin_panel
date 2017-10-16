import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Http} from '@angular/http';

@Injectable()
export class InfluencerService {

  constructor(
    private http: Http,
    private router: Router
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
}
