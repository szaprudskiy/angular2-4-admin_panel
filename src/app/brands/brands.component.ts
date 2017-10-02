import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrandsService } from '../shared/services/brands.service';
import { Brands } from '../shared/models/brands.model';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/combineLatest';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  providers: [BrandsService]
})
export class BrandsComponent {
  // subscription: Subscription;

  // constructor (private brandsService: BrandsService) {}

  // ngOnInit() {
  //   this.subscription = Observable.combineLatest (
  //     this.brandsService.getBrands(),
  //   ).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
