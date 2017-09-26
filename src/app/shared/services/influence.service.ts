import { Influence } from '../models/influence.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';


@Injectable()
export class InfluenceService {
   constructor(private http: Http) {}

   getInfluence(): Observable<Influence> {
        return this.http.get('http://api/influencer/list?count=7&offset=2')
            .map((response: Response) => response.json());
   }
}
