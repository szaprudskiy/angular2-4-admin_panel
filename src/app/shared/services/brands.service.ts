import { Brands } from '../models/brands.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';


@Injectable()
export class BrandsService {
   constructor(private http: Http) {}

   getBrands(): Observable<Brands> {
        return this.http.get('http://api/brand/list?count=5&offset=3')
        .map((response: Response) => response.json());
   }
}
